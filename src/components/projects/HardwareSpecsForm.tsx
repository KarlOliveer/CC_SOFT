import React from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { AutocompleteInput } from "@/components/ui/autocomplete-input";
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
  initialSpecs?: HardwareSpecs;
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
    model: string;
    ports: string;
    quantity: string;
  };
  serialCard: {
    included: boolean;
    model: string;
    ports: string;
    quantity: string;
  };
  wifiAdapter: {
    included: boolean;
    model: string;
  };
  networkSwitch: {
    included: boolean;
    model: string;
    ports: string;
  };
  // Calibrator specific
  securityPen?: {
    model: string;
    code: string;
  };
  mioCard?: {
    included: boolean;
    model: string;
    hasConditioning: boolean;
  };
  shentekCard?: {
    included: boolean;
    model: string;
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
  initialSpecs,
}: HardwareSpecsFormProps) => {
  // Load saved models from localStorage
  const [savedModels, setSavedModels] = React.useState(() => {
    const stored = localStorage.getItem("savedHardwareModels");
    return stored
      ? JSON.parse(stored)
      : {
          processor: [],
          motherboard: [],
          ram: [],
          ssd: [],
          ethernetCard: [],
          wifiAdapter: [],
          networkSwitch: [],
          mioCard: [],
          shentekCard: [],
          camera: [],
          securityPen: [],
          powerSupply: [],
        };
  });

  const [specs, setSpecs] = React.useState<HardwareSpecs>({
    processor: "",
    motherboard: "",
    ram: { model: "", quantity: "" },
    ssd: { model: "", quantity: "" },
    operatingSystem: "",
    powerSupply: "",
    ethernetCard: { included: false, model: "", ports: "", quantity: "" },
    serialCard: { included: false, model: "", ports: "", quantity: "" },
    wifiAdapter: { included: false, model: "" },
    networkSwitch: { included: false, model: "", ports: "" },
    additionalComponents: [],
    ...(projectType === "calibrador" && {
      securityPen: { model: "", code: "" },
      mioCard: { included: false, model: "", hasConditioning: false },
      shentekCard: {
        included: false,
        model: "",
        type: "2P",
        hasConditioning: false,
      },
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

  React.useEffect(() => {
    if (initialSpecs) {
      setSpecs(initialSpecs);
    }
  }, [initialSpecs]);

  // Function to save models when project is created/updated
  const saveNewModels = () => {
    const newModels = { ...savedModels };
    let hasChanges = false;

    // Check each field for new models
    const checkAndAddModel = (category: string, value: string) => {
      if (value && !newModels[category].includes(value)) {
        newModels[category] = [...newModels[category], value];
        hasChanges = true;
      }
    };

    // Check all relevant fields
    checkAndAddModel("processor", specs.processor);
    checkAndAddModel("motherboard", specs.motherboard);
    checkAndAddModel("ram", specs.ram.model);
    checkAndAddModel("ssd", specs.ssd.model);
    checkAndAddModel("powerSupply", specs.powerSupply);
    if (specs.ethernetCard.included) {
      checkAndAddModel("ethernetCard", specs.ethernetCard.model);
    }
    if (specs.wifiAdapter.included) {
      checkAndAddModel("wifiAdapter", specs.wifiAdapter.model);
    }
    if (specs.networkSwitch.included) {
      checkAndAddModel("networkSwitch", specs.networkSwitch.model);
    }
    if (specs.mioCard?.included) {
      checkAndAddModel("mioCard", specs.mioCard.model);
    }
    if (specs.shentekCard?.included) {
      checkAndAddModel("shentekCard", specs.shentekCard.model);
    }
    if (specs.securityPen?.model) {
      checkAndAddModel("securityPen", specs.securityPen.model);
    }

    if (hasChanges) {
      setSavedModels(newModels);
      localStorage.setItem("savedHardwareModels", JSON.stringify(newModels));
    }
  };

  // Call saveNewModels when form is submitted
  React.useEffect(() => {
    const handleBeforeUnload = () => {
      saveNewModels();
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [specs]);

  const handleModelDelete = (category: string, value: string) => {
    const newModels = {
      ...savedModels,
      [category]: savedModels[category].filter((m) => m !== value),
    };
    setSavedModels(newModels);
    localStorage.setItem("savedHardwareModels", JSON.stringify(newModels));
  };

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

  return (
    <div className="space-y-6">
      {/* Common Hardware Fields */}
      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-medium mb-2">Processador</h4>
          <AutocompleteInput
            placeholder="Ex: Intel i7 12700K"
            value={specs.processor}
            options={savedModels.processor}
            onChange={(e) => handleChange("processor", e.target.value)}
            onDelete={(value) => handleModelDelete("processor", value)}
          />
        </div>

        <div>
          <h4 className="text-sm font-medium mb-2">Placa Mãe</h4>
          <AutocompleteInput
            placeholder="Ex: ASUS ROG STRIX B550-F"
            value={specs.motherboard}
            options={savedModels.motherboard}
            onChange={(e) => handleChange("motherboard", e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="text-sm font-medium mb-2">Modelo RAM</h4>
            <AutocompleteInput
              placeholder="Ex: Corsair Vengeance"
              value={specs.ram.model}
              options={savedModels.ram}
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
            <AutocompleteInput
              placeholder="Ex: Samsung 970 EVO"
              value={specs.ssd.model}
              options={savedModels.ssd}
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
            <div className="ml-6 space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Modelo</h4>
                <AutocompleteInput
                  placeholder="Ex: Intel I350-T4"
                  value={specs.ethernetCard.model}
                  options={savedModels.ethernetCard}
                  onChange={(e) =>
                    handleNestedChange("ethernetCard", "model", e.target.value)
                  }
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium mb-2">Número de Portas</h4>
                  <Input
                    type="number"
                    placeholder="Ex: 4"
                    value={specs.ethernetCard.ports}
                    onChange={(e) =>
                      handleNestedChange(
                        "ethernetCard",
                        "ports",
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
            </div>
          )}
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="wifi"
              checked={specs.wifiAdapter.included}
              onCheckedChange={(checked) =>
                handleNestedChange("wifiAdapter", "included", checked)
              }
            />
            <label htmlFor="wifi" className="text-sm font-medium leading-none">
              Adaptador Wi-Fi
            </label>
          </div>

          {specs.wifiAdapter.included && (
            <div className="ml-6">
              <h4 className="text-sm font-medium mb-2">Modelo</h4>
              <AutocompleteInput
                placeholder="Ex: Intel AX200"
                value={specs.wifiAdapter.model}
                options={savedModels.wifiAdapter}
                onChange={(e) =>
                  handleNestedChange("wifiAdapter", "model", e.target.value)
                }
              />
            </div>
          )}
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="networkSwitch"
              checked={specs.networkSwitch.included}
              onCheckedChange={(checked) =>
                handleNestedChange("networkSwitch", "included", checked)
              }
            />
            <label
              htmlFor="networkSwitch"
              className="text-sm font-medium leading-none"
            >
              Switch de Rede
            </label>
          </div>

          {specs.networkSwitch.included && (
            <div className="ml-6 space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Modelo</h4>
                <AutocompleteInput
                  placeholder="Ex: TP-Link TL-SG108"
                  value={specs.networkSwitch.model}
                  options={savedModels.networkSwitch}
                  onChange={(e) =>
                    handleNestedChange("networkSwitch", "model", e.target.value)
                  }
                />
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2">Número de Portas</h4>
                <Input
                  type="number"
                  placeholder="Ex: 8"
                  value={specs.networkSwitch.ports}
                  onChange={(e) =>
                    handleNestedChange("networkSwitch", "ports", e.target.value)
                  }
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Calibrator Specific Fields */}
      {projectType === "calibrador" && (
        <div className="space-y-4">
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Pen de Segurança</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Modelo</h4>
                <AutocompleteInput
                  placeholder="Digite o modelo"
                  value={specs.securityPen?.model || ""}
                  options={savedModels.securityPen}
                  onChange={(e) =>
                    handleNestedChange("securityPen", "model", e.target.value)
                  }
                />
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2">Código</h4>
                <Input
                  placeholder="Digite o código"
                  value={specs.securityPen?.code || ""}
                  onChange={(e) =>
                    handleNestedChange("securityPen", "code", e.target.value)
                  }
                />
              </div>
            </div>
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
              <div className="ml-6 space-y-4">
                <div>
                  <h4 className="text-sm font-medium mb-2">Modelo</h4>
                  <AutocompleteInput
                    placeholder="Digite o modelo"
                    value={specs.mioCard?.model || ""}
                    options={savedModels.mioCard}
                    onChange={(e) =>
                      handleNestedChange("mioCard", "model", e.target.value)
                    }
                  />
                </div>
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
                <div>
                  <h4 className="text-sm font-medium mb-2">Modelo</h4>
                  <AutocompleteInput
                    placeholder="Digite o modelo"
                    value={specs.shentekCard?.model || ""}
                    options={savedModels.shentekCard}
                    onChange={(e) =>
                      handleNestedChange("shentekCard", "model", e.target.value)
                    }
                  />
                </div>
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
          <AutocompleteInput
            placeholder="Ex: 500W 80 Plus"
            value={specs.powerSupply}
            options={savedModels.powerSupply}
            onChange={(e) => handleChange("powerSupply", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default HardwareSpecsForm;
