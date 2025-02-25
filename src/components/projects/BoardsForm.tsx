import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type BoardType =
  | "RIO"
  | "Master"
  | "Amplificador"
  | "Vibrador"
  | "Microsorter"
  | "Placa de volta"
  | "Localizador"
  | "Conversor VV"
  | "Conversor IV"
  | "Driver de LEDs"
  | "Placa LEDs WT"
  | "Placa LEDs IR";

interface Board {
  type: BoardType;
  version: string;
  quantity: string;
  codes: string[];
}

interface BoardsFormProps {
  onChange?: (boards: Board[]) => void;
  initialBoards?: Board[];
}

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

const BoardsForm = ({
  onChange = () => {},
  initialBoards = [],
}: BoardsFormProps) => {
  const [boards, setBoards] = React.useState<Board[]>(initialBoards);

  const addBoard = () => {
    const newBoards = [
      ...boards,
      { type: BOARD_TYPES[0], version: "", quantity: "1", codes: [] },
    ];
    setBoards(newBoards);
    onChange(newBoards);
  };

  const removeBoard = (index: number) => {
    const newBoards = boards.filter((_, i) => i !== index);
    setBoards(newBoards);
    onChange(newBoards);
  };

  const updateBoard = (index: number, field: keyof Board, value: any) => {
    const newBoards = boards.map((board, i) => {
      if (i === index) {
        if (field === "type") {
          // Reset codes when changing board type
          return {
            ...board,
            [field]: value,
            codes: [],
          };
        }
        if (field === "quantity") {
          // Adjust codes array length based on new quantity
          const newQuantity = parseInt(value) || 0;
          return {
            ...board,
            [field]: value,
            codes: Array(newQuantity).fill(""),
          };
        }
        return { ...board, [field]: value };
      }
      return board;
    });
    setBoards(newBoards);
    onChange(newBoards);
  };

  const updateCode = (boardIndex: number, codeIndex: number, value: string) => {
    const newBoards = boards.map((board, i) => {
      if (i === boardIndex) {
        const newCodes = [...board.codes];
        newCodes[codeIndex] = value;
        return { ...board, codes: newCodes };
      }
      return board;
    });
    setBoards(newBoards);
    onChange(newBoards);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-medium">Placas</h4>
        <Button variant="outline" size="sm" onClick={addBoard} className="h-8">
          <Plus className="h-4 w-4 mr-1" />
          Adicionar Placa
        </Button>
      </div>

      {boards.map((board, boardIndex) => (
        <div key={boardIndex} className="space-y-4 p-4 border rounded-lg">
          <div className="flex items-center gap-2">
            <div className="flex-1 grid grid-cols-2 gap-2">
              <Select
                value={board.type}
                onValueChange={(value) =>
                  updateBoard(boardIndex, "type", value as BoardType)
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
              <Input
                placeholder="Versão"
                value={board.version}
                onChange={(e) =>
                  updateBoard(boardIndex, "version", e.target.value)
                }
              />
            </div>
            <div className="w-24">
              <Input
                type="number"
                min="1"
                placeholder="Qtd"
                value={board.quantity}
                onChange={(e) =>
                  updateBoard(boardIndex, "quantity", e.target.value)
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

          {!BOARDS_WITHOUT_CODES.has(board.type) &&
            parseInt(board.quantity) > 0 && (
              <div className="space-y-2">
                {Array.from({ length: parseInt(board.quantity) }).map(
                  (_, index) => (
                    <Input
                      key={index}
                      placeholder={`Código ${index + 1}`}
                      value={board.codes[index] || ""}
                      onChange={(e) =>
                        updateCode(boardIndex, index, e.target.value)
                      }
                    />
                  ),
                )}
              </div>
            )}
        </div>
      ))}
    </div>
  );
};

export default BoardsForm;
