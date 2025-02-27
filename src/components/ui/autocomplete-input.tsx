import * as React from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

interface AutocompleteInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  options: string[];
  onSelect?: (value: string) => void;
}

export function AutocompleteInput({
  options,
  onSelect,
  className,
  ...props
}: AutocompleteInputProps) {
  const [showSuggestions, setShowSuggestions] = React.useState(false);
  const [filteredOptions, setFilteredOptions] = React.useState<string[]>([]);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const suggestionsRef = React.useRef<HTMLDivElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    props.onChange?.(e);

    // Filter options based on input
    const filtered = options.filter((option) =>
      option.toLowerCase().includes(value.toLowerCase()),
    );
    setFilteredOptions(filtered);
    setShowSuggestions(true);
  };

  const handleSelect = (value: string) => {
    if (inputRef.current) {
      inputRef.current.value = value;
      const event = new Event("change", { bubbles: true });
      inputRef.current.dispatchEvent(event);
    }
    onSelect?.(value);
    setShowSuggestions(false);
  };

  // Close suggestions when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target as Node) &&
        !inputRef.current?.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full">
      <Input
        {...props}
        ref={inputRef}
        onChange={handleInputChange}
        onFocus={() => setShowSuggestions(true)}
        className={cn("w-full", className)}
      />
      {showSuggestions && filteredOptions.length > 0 && (
        <div
          ref={suggestionsRef}
          className="absolute z-50 w-full mt-1 bg-white dark:bg-gray-800 border rounded-md shadow-lg max-h-48 overflow-auto"
        >
          {filteredOptions.map((option, index) => (
            <div
              key={index}
              className="px-3 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
