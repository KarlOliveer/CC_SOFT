import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";

interface Component {
  name: string;
  quantity: string;
}

interface ReplacedComponentsFormProps {
  onChange?: (components: Component[]) => void;
  initialComponents?: Component[];
}

const ReplacedComponentsForm = ({
  onChange = () => {},
  initialComponents = [],
}: ReplacedComponentsFormProps) => {
  const [components, setComponents] =
    React.useState<Component[]>(initialComponents);

  const addComponent = () => {
    const newComponents = [...components, { name: "", quantity: "1" }];
    setComponents(newComponents);
    onChange(newComponents);
  };

  const removeComponent = (index: number) => {
    const newComponents = components.filter((_, i) => i !== index);
    setComponents(newComponents);
    onChange(newComponents);
  };

  const updateComponent = (
    index: number,
    field: keyof Component,
    value: string,
  ) => {
    const newComponents = components.map((component, i) => {
      if (i === index) {
        return { ...component, [field]: value };
      }
      return component;
    });
    setComponents(newComponents);
    onChange(newComponents);
  };

  return (
    <div className="space-y-4">
      {components.map((component, index) => (
        <div key={index} className="flex items-center gap-2">
          <div className="flex-1">
            <Input
              placeholder="Nome do componente"
              value={component.name}
              onChange={(e) => updateComponent(index, "name", e.target.value)}
            />
          </div>
          <div className="w-24">
            <Input
              type="number"
              min="1"
              placeholder="Qtd"
              value={component.quantity}
              onChange={(e) =>
                updateComponent(index, "quantity", e.target.value)
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
      <Button
        variant="outline"
        size="sm"
        onClick={addComponent}
        className="w-full"
      >
        <Plus className="h-4 w-4 mr-2" />
        Adicionar Componente
      </Button>
    </div>
  );
};

export default ReplacedComponentsForm;
