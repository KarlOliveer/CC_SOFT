import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { HardwareSpecs, Board, BoardType } from "@/types/types";

const BOARD_TYPES: BoardType[] = [
  "RIO",
  "Master",
  "Amplificador",
  "Vibrador",
  "Microsorter",
  "Placa de volta",
  "Localizador",
  "Conversor VV",
  "Conversor IV",
  "Driver de LEDs",
  "Placa LEDs WT",
  "Placa LEDs IR",
];

const BOARDS_WITHOUT_CODES = new Set([
  "Conversor IV",
  "Conversor VV",
  "Placa LEDs WT",
  "Placa LEDs IR",
]);

interface HardwareSpecsFormProps {
  projectType: string;
<<<<<<< HEAD
  onChange: (specs: HardwareSpecs | null) => void;
  initialSpecs?: HardwareSpecs;
}

const HardwareSpecsForm: React.FC<HardwareSpecsFormProps> = ({
  projectType,
  onChange,
  initialSpecs,
}) => {
  const [specs, setSpecs] = useState<HardwareSpecs>(
    initialSpecs || {
      processor: "",
      ram: { model: "", quantity: "" },
      network: {
        networkCard: { included: false, ports: "", quantity: "" }, // Added explicit 'included'
        switch: false,
=======
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
>>>>>>> 5f3c6f3e2934f26122d72d708ee503906e763a00
      },
      calibrator: {
        mioBoard: { included: false, hasConditioning: false },
        camera: {
          included: false,
          type: "",
          quantity: "",
          lens: { type: "", quantity: "" },
          cable: { type: "", quantity: "" },
        },
      },
      motherboard: "",
      storage: { model: "", quantity: "" },
      wifiAdapter: false,
      shentekBoard: { included: false, ports: "", hasConditioning: false },
      securityPen: { included: false, code: "" },
      boards: [],
      additionalComponents: [],
    }
  );

  useEffect(() => {
    onChange(specs);
  }, [specs, onChange]);

  React.useEffect(() => {
    if (initialSpecs) {
      setSpecs(initialSpecs);
    }
  }, [initialSpecs]);

  const handleChange = <K extends keyof HardwareSpecs>(
    field: K,
    value: HardwareSpecs[K]
  ) => {
    setSpecs((prev) => ({ ...prev, [field]: value }));
  };

  const handleNestedChange = (
    parent: keyof HardwareSpecs,
    field: string,
    value: any,
    index?: number
  ) => {
    setSpecs((prev) => {
      const newSpecs = { ...prev };

      if (parent === "boards") {
        const [boardIndexStr, ...fieldParts] = field.split(".");
        const boardIndex = parseInt(boardIndexStr, 10);
        const boardField = fieldParts.join(".");

        newSpecs.boards = newSpecs.boards.map((board, i) => {
          if (i !== boardIndex) return board;
          if (boardField === "type") {
            return { ...board, type: value as BoardType, codes: [] };
          }
          if (boardField === "quantity") {
            const newQuantity = parseInt(value) || 0;
            const currentCodes = board.codes || [];
            return {
              ...board,
              quantity: value,
              codes: Array(newQuantity)
                .fill("")
                .map((_, idx) => currentCodes[idx] || ""),
            };
          }
          if (boardField === "codes") {
            const newCodes = [...board.codes];
            newCodes[index!] = value;
            return { ...board, codes: newCodes };
          }
          return board;
        });
      } else {
        const parentObj = { ...newSpecs[parent] } as any;
        const [key, subKey] = field.split(".");
        if (subKey) {
          parentObj[key] = { ...parentObj[key], [subKey]: value };
        } else {
          parentObj[key] = value;
        }
        newSpecs[parent] = parentObj;
      }
      return newSpecs;
    });
  };

  const addBoard = () => {
    setSpecs((prev) => ({
      ...prev,
      boards: [...prev.boards, { type: BOARD_TYPES[0], quantity: "1", codes: [] }],
    }));
  };

  const removeBoard = (index: number) => {
    setSpecs((prev) => ({
      ...prev,
      boards: prev.boards.filter((_, i) => i !== index),
    }));
  };

  const addComponent = () => {
    setSpecs((prev) => ({
      ...prev,
      additionalComponents: [...prev.additionalComponents, { name: "", quantity: "" }],
    }));
  };

  const removeComponent = (index: number) => {
    setSpecs((prev) => ({
      ...prev,
      additionalComponents: prev.additionalComponents.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="space-y-6">
      {/* Common Hardware Fields */}
      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-medium mb-2">Processador</h4>
          <Input
            placeholder="Ex: Intel i3-12100"
            value={specs.processor}
            onChange={(e) => handleChange("processor", e.target.value)}
          />
        </div>
        <div>
          <h4 className="text-sm font-medium mb-2">Placa Mãe</h4>
          <Input
            placeholder="Ex: MSI PRO B760-P DDR4 2"
            value={specs.motherboard}
            onChange={(e) => handleChange("motherboard", e.target.value)}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="text-sm font-medium mb-2">Modelo RAM</h4>
            <Input
              placeholder="Ex: 8 GB"
              value={specs.ram.model}
              onChange={(e) => handleNestedChange("ram", "model", e.target.value)}
            />
          </div>
          <div>
            <h4 className="text-sm font-medium mb-2">Quantidade RAM</h4>
            <Input
              type="number"
              placeholder="Ex: 1"
              value={specs.ram.quantity}
              onChange={(e) => handleNestedChange("ram", "quantity", e.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="text-sm font-medium mb-2">Modelo Armazenamento</h4>
            <Input
              placeholder="Ex: 240GB"
              value={specs.storage.model}
              onChange={(e) => handleNestedChange("storage", "model", e.target.value)}
            />
          </div>
          <div>
            <h4 className="text-sm font-medium mb-2">Quantidade Armazenamento</h4>
            <Input
              type="number"
              placeholder="Ex: 1"
              value={specs.storage.quantity}
              onChange={(e) => handleNestedChange("storage", "quantity", e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Network Components */}
      <div className="space-y-4">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="networkCard"
              checked={specs.network.networkCard.included}
              onCheckedChange={(checked) =>
                handleNestedChange("network", "networkCard.included", checked as boolean)
              }
            />
            <Label htmlFor="networkCard" className="text-sm font-medium leading-none">
              Placa de Rede
            </Label>
          </div>
<<<<<<< HEAD
          {specs.network.networkCard.included && (
            <div className="ml-6 grid grid-cols-2 gap-4">
=======

          {specs.ethernetCard.included && (
            <div className="ml-6 space-y-4">
>>>>>>> 5f3c6f3e2934f26122d72d708ee503906e763a00
              <div>
                <h4 className="text-sm font-medium mb-2">Modelo</h4>
                <Input
<<<<<<< HEAD
                  type="number"
                  placeholder="Ex: 1"
                  value={specs.network.networkCard.ports}
                  onChange={(e) =>
                    handleNestedChange("network", "networkCard.ports", e.target.value)
                  }
                />
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2">Quantidade</h4>
                <Input
                  type="number"
                  placeholder="Ex: 1"
                  value={specs.network.networkCard.quantity}
                  onChange={(e) =>
                    handleNestedChange("network", "networkCard.quantity", e.target.value)
                  }
                />
              </div>
            </div>
          )}
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="switch"
            checked={specs.network.switch}
            onCheckedChange={(checked) =>
              handleNestedChange("network", "switch", checked as boolean)
            }
          />
          <Label htmlFor="switch" className="text-sm font-medium leading-none">
            Switch de Rede
          </Label>
        </div>
      </div>

      {/* Calibrator Specific Fields */}
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="mioBoard"
              checked={specs.calibrator.mioBoard.included}
              onCheckedChange={(checked) =>
                handleNestedChange("calibrator", "mioBoard.included", checked as boolean)
              }
            />
            <Label htmlFor="mioBoard" className="text-sm font-medium leading-none">
              Placa MIO
            </Label>
          </div>
          {specs.calibrator.mioBoard.included && (
            <div className="ml-6">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="mioConditioning"
                  checked={specs.calibrator.mioBoard.hasConditioning}
                  onCheckedChange={(checked) =>
                    handleNestedChange(
                      "calibrator",
                      "mioBoard.hasConditioning",
                      checked as boolean
                    )
                  }
                />
                <Label
                  htmlFor="mioConditioning"
                  className="text-sm font-medium leading-none"
                >
                  Com cabo e condicionamento
                </Label>
              </div>
            </div>
          )}
        </div>

        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="camera"
              checked={specs.calibrator.camera.included}
              onCheckedChange={(checked) =>
                handleNestedChange("calibrator", "camera.included", checked as boolean)
              }
            />
            <Label htmlFor="camera" className="text-sm font-medium leading-none">
              Câmera
            </Label>
          </div>
          {specs.calibrator.camera.included && (
            <div className="ml-6 space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Tipo da Câmera</h4>
                <Input
                  placeholder="Ex: acA1300-60gc"
                  value={specs.calibrator.camera.type}
                  onChange={(e) =>
                    handleNestedChange("calibrator", "camera.type", e.target.value)
                  }
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium mb-2">Quantidade</h4>
                  <Input
                    type="number"
                    placeholder="Ex: 4"
                    value={specs.calibrator.camera.quantity}
                    onChange={(e) =>
                      handleNestedChange("calibrator", "camera.quantity", e.target.value)
                    }
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium mb-2">Tipo da Lente</h4>
                  <Input
                    placeholder="Ex: Lente 16 mm 3 Mp"
                    value={specs.calibrator.camera.lens.type}
                    onChange={(e) =>
                      handleNestedChange("calibrator", "camera.lens.type", e.target.value)
                    }
                  />
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">Quantidade de Lentes</h4>
                  <Input
                    type="number"
                    placeholder="Ex: 4"
                    value={specs.calibrator.camera.lens.quantity}
                    onChange={(e) =>
                      handleNestedChange(
                        "calibrator",
                        "camera.lens.quantity",
                        e.target.value
                      )
                    }
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium mb-2">Tipo do Cabo</h4>
                  <Input
                    placeholder="Ex: Cabo Hirose 6, 10 m"
                    value={specs.calibrator.camera.cable.type}
                    onChange={(e) =>
                      handleNestedChange("calibrator", "camera.cable.type", e.target.value)
                    }
                  />
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">Quantidade de Cabos</h4>
                  <Input
                    type="number"
                    placeholder="Ex: 4"
                    value={specs.calibrator.camera.cable.quantity}
                    onChange={(e) =>
                      handleNestedChange(
                        "calibrator",
                        "camera.cable.quantity",
                        e.target.value
                      )
                    }
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="shentekBoard"
              checked={specs.shentekBoard.included}
              onCheckedChange={(checked) =>
                handleNestedChange("shentekBoard", "included", checked as boolean)
              }
            />
            <Label htmlFor="shentekBoard" className="text-sm font-medium leading-none">
              Placa Shentek
            </Label>
          </div>
          {specs.shentekBoard.included && (
            <div className="ml-6 space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Número de Portas</h4>
                <Input
                  type="number"
                  placeholder="Ex: 4"
                  value={specs.shentekBoard.ports}
                  onChange={(e) =>
                    handleNestedChange("shentekBoard", "ports", e.target.value)
                  }
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="shentekConditioning"
                  checked={specs.shentekBoard.hasConditioning}
                  onCheckedChange={(checked) =>
                    handleNestedChange(
                      "shentekBoard",
                      "hasConditioning",
                      checked as boolean
                    )
                  }
                />
                <Label
                  htmlFor="shentekConditioning"
                  className="text-sm font-medium leading-none"
                >
                  Cabo e Condicionamento Shentek
                </Label>
=======
                  placeholder="Ex: Intel I350-T4"
                  value={specs.ethernetCard.model}
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
>>>>>>> 5f3c6f3e2934f26122d72d708ee503906e763a00
              </div>
            </div>
          )}
        </div>

        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="securityPen"
              checked={specs.securityPen.included}
              onCheckedChange={(checked) =>
                handleNestedChange("securityPen", "included", checked as boolean)
              }
            />
            <Label htmlFor="securityPen" className="text-sm font-medium leading-none">
              Pen de Segurança
            </Label>
          </div>
<<<<<<< HEAD
          {specs.securityPen.included && (
            <div className="ml-6">
              <h4 className="text-sm font-medium mb-2">Código da Pen</h4>
              <Input
                placeholder="Ex: 877234392"
                value={specs.securityPen.code}
                onChange={(e) =>
                  handleNestedChange("securityPen", "code", e.target.value)
                }
              />
=======

          {specs.serialCard.included && (
            <div className="ml-6 space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Modelo</h4>
                <Input
                  placeholder="Ex: PCI Express RS232"
                  value={specs.serialCard.model}
                  onChange={(e) =>
                    handleNestedChange("serialCard", "model", e.target.value)
                  }
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
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
                      handleNestedChange(
                        "serialCard",
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
              <Input
                placeholder="Ex: Intel AX200"
                value={specs.wifiAdapter.model}
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
                <Input
                  placeholder="Ex: TP-Link TL-SG108"
                  value={specs.networkSwitch.model}
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
>>>>>>> 5f3c6f3e2934f26122d72d708ee503906e763a00
            </div>
          )}
        </div>
      </div>

<<<<<<< HEAD
      {/* Boards */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-medium">Placas</h4>
          <Button variant="outline" size="sm" onClick={addBoard} className="h-8">
            <Plus className="h-4 w-4 mr-1" />
            Adicionar Placa
          </Button>
        </div>
        {specs.boards.map((board, boardIndex) => (
          <div key={boardIndex} className="space-y-4 p-4 border rounded-lg">
            <div className="flex items-center gap-2">
              <div className="flex-1">
=======
      {/* Calibrator Specific Fields */}
      {projectType === "calibrador" && (
        <div className="space-y-4">
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Pen de Segurança</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Modelo</h4>
                <Input
                  placeholder="Digite o modelo"
                  value={specs.securityPen?.model || ""}
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
                  <Input
                    placeholder="Digite o modelo"
                    value={specs.mioCard?.model || ""}
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
                  <Input
                    placeholder="Digite o modelo"
                    value={specs.shentekCard?.model || ""}
                    onChange={(e) =>
                      handleNestedChange("shentekCard", "model", e.target.value)
                    }
                  />
                </div>
>>>>>>> 5f3c6f3e2934f26122d72d708ee503906e763a00
                <Select
                  value={board.type}
                  onValueChange={(value) =>
                    handleNestedChange("boards", `${boardIndex}.type`, value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    {BOARD_TYPES.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="w-24">
                <Input
                  type="number"
                  min="1"
                  placeholder="Qtd"
                  value={board.quantity}
                  onChange={(e) =>
                    handleNestedChange("boards", `${boardIndex}.quantity`, e.target.value)
                  }
                />
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeBoard(boardIndex)}
                className="h-10 w-10"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            {!BOARDS_WITHOUT_CODES.has(board.type) && parseInt(board.quantity) > 0 && (
              <div className="space-y-2">
                {Array.from({ length: parseInt(board.quantity) || 0 }).map((_, index) => (
                  <Input
                    key={index}
                    placeholder={`Código ${index + 1}`}
                    value={board.codes[index] || ""}
                    onChange={(e) =>
                      handleNestedChange("boards", `${boardIndex}.codes`, e.target.value, index)
                    }
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Additional Components */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-medium">Componentes Adicionais</h4>
          <Button variant="outline" size="sm" onClick={addComponent} className="h-8">
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
                    e.target.value
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
                    e.target.value
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

      {/* Wi-Fi Adapter */}
      <div className="flex items-center space-x-2">
        <Checkbox
          id="wifi"
          checked={specs.wifiAdapter}
          onCheckedChange={(checked) => handleChange("wifiAdapter", checked as boolean)}
        />
        <Label htmlFor="wifi" className="text-sm font-medium leading-none">
          Adaptador Wi-Fi
        </Label>
      </div>
    </div>
  );
};

export default HardwareSpecsForm;