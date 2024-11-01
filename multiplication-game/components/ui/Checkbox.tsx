// components/ui/Checkbox.tsx
import React from "react";

interface CheckboxProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  id: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onCheckedChange,
  id,
}) => {
  return (
    <input
      type="checkbox"
      placeholder="Checkbox"
      id={id}
      checked={checked}
      onChange={(e) => onCheckedChange(e.target.checked)}
      className="form-checkbox" // Add your styling classes here
    />
  );
};

export default Checkbox;
