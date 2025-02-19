import React from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface HardwareSpecsFormProps {
  projectType: string;
  onChange?: (specs: HardwareSpecs) => void;
}

export interface HardwareSpecs {
  processor: string;
  motherboard: string;
  ram: {
    model: string;
    quantity: string;
  };
  ssd: {
    model: string;
    quantity: string;
  };
  operatingSystem: string;
  powerSupply: string;
  ethernetCard: {
    included: boolean;
    ports: string;
    quantity: string;
  };
  serialCard: {
    included: boolean;
    ports: string;
    quantity: string;
  };
  wifiAdapter: boolean;
  switch: boolean;
  // Calibrator specific
  securityPen?: string;
  mioCard?: {
    included: boolean;
    hasConditioning: boolean;
  };
  shentekCard?: {
    included: boolean;
    type: "2P" | "4P";
    hasConditioning: boolean;
  };
  camera?: {
    included: boolean;
    type: string;
    quantity: string;
    lensType: string;
    lensQuantity: string;
    cableType: string;
    cableQuantity: string;
  };
  additionalComponents: Array<{
    name: string;
    quantity: string;
  }>;
}

const HardwareSpecsForm = ({
  projectType,
  onChange = () => {},
}: HardwareSpecsFormProps) => {
  const [specs, setSpecs] = React.useState<HardwareSpecs>({
    processor: "",
    motherboard: "",
    ram: { model: "", quantity: "" },
    ssd: { model: "", quantity: "" },
    operatingSystem: "",
    powerSupply: "",
    ethernetCard: { included: false, ports: "", quantity: "" },
    serialCard: { included: false, ports: "", quantity: "" },
    wifiAdapter: false,
    switch: false,
    additionalComponents: [],
    ...(projectType === "calibrador" && {
      securityPen: "",
      mioCard: { included: false, hasConditioning: false },
      shentekCard: { included: false, type: "2P", hasConditioning: false },
      camera: {
        included: false,
        type: "",
        quantity: "",
        lensType: "",
        lensQuantity: "",
        cableType: "",
        cableQuantity: "",
      },
    }),
  });

  const handleChange = <K extends keyof HardwareSpecs>(
    field: K,
    value: HardwareSpecs[K],
  ) => {
    const newSpecs = { ...specs, [field]: value };
    setSpecs(newSpecs);
    onChange(newSpecs);
  };

  const handleNestedChange = (
    parent: keyof HardwareSpecs,
    field: string,
    value: any,
  ) => {
    const newSpecs = {
      ...specs,
      [parent]: {
        ...specs[parent],
        [field]: value,
      },
    };
    setSpecs(newSpecs);
    onChange(newSpecs);
  };

  const addComponent = () => {
    const newSpecs = {
      ...specs,
      additionalComponents: [
        ...specs.additionalComponents,
        { name: "", quantity: "" },
      ],
    };
    setSpecs(newSpecs);
    onChange(newSpecs);
  };

  const removeComponent = (index: number) => {
    const newSpecs = {
      ...specs,
      additionalComponents: specs.additionalComponents.filter(
        (_, i) => i !== index,
      ),
    };
    setSpecs(newSpecs);
    onChange(newSpecs);
  };

  return (
    <div className="space-y-6">
      {/* Common Hardware Fields */}
      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-medium mb-2">Processador</h4>
          <Input
            placeholder="Ex: Intel i7 12700K"
            value={specs.processor}
            onChange={(e) => handleChange("processor", e.target.value)}
          />
        </div>

        <div>
          <h4 className="text-sm font-medium mb-2">Placa Mãe</h4>
          <Input
            placeholder="Ex: ASUS ROG STRIX B550-F"
            value={specs.motherboard}
            onChange={(e) => handleChange("motherboard", e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="text-sm font-medium mb-2">Modelo RAM</h4>
            <Input
              placeholder="Ex: Corsair Vengeance"
              value={specs.ram.model}
              onChange={(e) =>
                handleNestedChange("ram", "model", e.target.value)
              }
            />
          </div>
          <div>
            <h4 className="text-sm font-medium mb-2">Quantidade RAM</h4>
            <Input
              type="number"
              placeholder="Ex: 16"
              value={specs.ram.quantity}
              onChange={(e) =>
                handleNestedChange("ram", "quantity", e.target.value)
              }
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="text-sm font-medium mb-2">Modelo SSD</h4>
            <Input
              placeholder="Ex: Samsung 970 EVO"
              value={specs.ssd.model}
              onChange={(e) =>
                handleNestedChange("ssd", "model", e.target.value)
              }
            />
          </div>
          <div>
            <h4 className="text-sm font-medium mb-2">Quantidade SSD</h4>
            <Input
              type="number"
              placeholder="Ex: 1"
              value={specs.ssd.quantity}
              onChange={(e) =>
                handleNestedChange("ssd", "quantity", e.target.value)
              }
            />
          </div>
        </div>
      </div>

      {/* Network Components */}
      <div className="space-y-4">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="ethernet"
              checked={specs.ethernetCard.included}
              onCheckedChange={(checked) =>
                handleNestedChange("ethernetCard", "included", checked)
              }
            />
            <label
              htmlFor="ethernet"
              className="text-sm font-medium leading-none"
            >
              Placa Ethernet
            </label>
          </div>

          {specs.ethernetCard.included && (
            <div className="ml-6 grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Número de Portas</h4>
                <Input
                  type="number"
                  placeholder="Ex: 4"
                  value={specs.ethernetCard.ports}
                  onChange={(e) =>
                    handleNestedChange("ethernetCard", "ports", e.target.value)
                  }
                />
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2">Quantidade</h4>
                <Input
                  type="number"
                  placeholder="Ex: 1"
                  value={specs.ethernetCard.quantity}
                  onChange={(e) =>
                    handleNestedChange(
                      "ethernetCard",
                      "quantity",
                      e.target.value,
                    )
                  }
                />
              </div>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="serial"
              checked={specs.serialCard.included}
              onCheckedChange={(checked) =>
                handleNestedChange("serialCard", "included", checked)
              }
            />
            <label
              htmlFor="serial"
              className="text-sm font-medium leading-none"
            >
              Placa Serial
            </label>
          </div>

          {specs.serialCard.included && (
            <div className="ml-6 grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Número de Portas</h4>
                <Input
                  type="number"
                  placeholder="Ex: 2"
                  value={specs.serialCard.ports}
                  onChange={(e) =>
                    handleNestedChange("serialCard", "ports", e.target.value)
                  }
                />
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2">Quantidade</h4>
                <Input
                  type="number"
                  placeholder="Ex: 1"
                  value={specs.serialCard.quantity}
                  onChange={(e) =>
                    handleNestedChange("serialCard", "quantity", e.target.value)
                  }
                />
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="wifi"
            checked={specs.wifiAdapter}
            onCheckedChange={(checked) =>
              handleChange("wifiAdapter", checked as boolean)
            }
          />
          <label htmlFor="wifi" className="text-sm font-medium leading-none">
            Adaptador Wi-Fi
          </label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="switch"
            checked={specs.switch}
            onCheckedChange={(checked) =>
              handleChange("switch", checked as boolean)
            }
          />
          <label htmlFor="switch" className="text-sm font-medium leading-none">
            Switch
          </label>
        </div>
      </div>

      {/* Calibrator Specific Fields */}
      {projectType === "calibrador" && (
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium mb-2">Pen de Segurança</h4>
            <Input
              placeholder="Digite o código"
              value={specs.securityPen}
              onChange={(e) => handleChange("securityPen", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="mioCard"
                checked={specs.mioCard?.included}
                onCheckedChange={(checked) =>
                  handleNestedChange("mioCard", "included", checked)
                }
              />
              <label
                htmlFor="mioCard"
                className="text-sm font-medium leading-none"
              >
                Placa MIO
              </label>
            </div>

            {specs.mioCard?.included && (
              <div className="ml-6">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="mioConditioning"
                    checked={specs.mioCard?.hasConditioning}
                    onCheckedChange={(checked) =>
                      handleNestedChange("mioCard", "hasConditioning", checked)
                    }
                  />
                  <label
                    htmlFor="mioConditioning"
                    className="text-sm font-medium leading-none"
                  >
                    Cabo e Condicionamento MIO
                  </label>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="shentekCard"
                checked={specs.shentekCard?.included}
                onCheckedChange={(checked) =>
                  handleNestedChange("shentekCard", "included", checked)
                }
              />
              <label
                htmlFor="shentekCard"
                className="text-sm font-medium leading-none"
              >
                Placa Shentek
              </label>
            </div>

            {specs.shentekCard?.included && (
              <div className="ml-6 space-y-4">
                <Select
                  value={specs.shentekCard?.type}
                  onValueChange={(value) =>
                    handleNestedChange("shentekCard", "type", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2P">2P</SelectItem>
                    <SelectItem value="4P">4P</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="shentekConditioning"
                    checked={specs.shentekCard?.hasConditioning}
                    onCheckedChange={(checked) =>
                      handleNestedChange(
                        "shentekCard",
                        "hasConditioning",
                        checked,
                      )
                    }
                  />
                  <label
                    htmlFor="shentekConditioning"
                    className="text-sm font-medium leading-none"
                  >
                    Cabo e Condicionamento Shentek
                  </label>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="camera"
                checked={specs.camera?.included}
                onCheckedChange={(checked) =>
                  handleNestedChange("camera", "included", checked)
                }
              />
              <label
                htmlFor="camera"
                className="text-sm font-medium leading-none"
              >
                Câmera
              </label>
            </div>

            {specs.camera?.included && (
              <div className="ml-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-medium mb-2">Tipo da Câmera</h4>
                    <Input
                      placeholder="Digite o tipo"
                      value={specs.camera?.type}
                      onChange={(e) =>
                        handleNestedChange("camera", "type", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-2">Quantidade</h4>
                    <Input
                      type="number"
                      placeholder="Ex: 1"
                      value={specs.camera?.quantity}
                      onChange={(e) =>
                        handleNestedChange("camera", "quantity", e.target.value)
                      }
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-medium mb-2">Tipo da Lente</h4>
                    <Input
                      placeholder="Digite o tipo"
                      value={specs.camera?.lensType}
                      onChange={(e) =>
                        handleNestedChange("camera", "lensType", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-2">Quantidade</h4>
                    <Input
                      type="number"
                      placeholder="Ex: 1"
                      value={specs.camera?.lensQuantity}
                      onChange={(e) =>
                        handleNestedChange(
                          "camera",
                          "lensQuantity",
                          e.target.value,
                        )
                      }
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-medium mb-2">Tipo do Cabo</h4>
                    <Input
                      placeholder="Digite o tipo"
                      value={specs.camera?.cableType}
                      onChange={(e) =>
                        handleNestedChange(
                          "camera",
                          "cableType",
                          e.target.value,
                        )
                      }
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-2">Quantidade</h4>
                    <Input
                      type="number"
                      placeholder="Ex: 1"
                      value={specs.camera?.cableQuantity}
                      onChange={(e) =>
                        handleNestedChange(
                          "camera",
                          "cableQuantity",
                          e.target.value,
                        )
                      }
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* General Fields */}
      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-medium mb-2">Sistema Operacional</h4>
          <Input
            placeholder="Ex: Windows 10 Pro"
            value={specs.operatingSystem}
            onChange={(e) => handleChange("operatingSystem", e.target.value)}
          />
        </div>

        <div>
          <h4 className="text-sm font-medium mb-2">Fonte de Alimentação</h4>
          <Input
            placeholder="Ex: 500W 80 Plus"
            value={specs.powerSupply}
            onChange={(e) => handleChange("powerSupply", e.target.value)}
          />
        </div>
      </div>

      {/* Additional Components */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-medium">Componentes Adicionais</h4>
          <Button
            variant="outline"
            size="sm"
            onClick={addComponent}
            className="h-8"
          >
            <Plus className="h-4 w-4 mr-1" />
            Adicionar
          </Button>
        </div>

        {specs.additionalComponents.map((component, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="flex-1 grid grid-cols-2 gap-2">
              <Input
                placeholder="Nome do Componente"
                value={component.name}
                onChange={(e) =>
                  handleNestedChange(
                    "additionalComponents",
                    `${index}.name`,
                    e.target.value,
                  )
                }
              />
              <Input
                type="number"
                placeholder="Quantidade"
                value={component.quantity}
                onChange={(e) =>
                  handleNestedChange(
                    "additionalComponents",
                    `${index}.quantity`,
                    e.target.value,
                  )
                }
              />
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => removeComponent(index)}
              className="h-10 w-10"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HardwareSpecsForm;
