interface TechBoxProps {
  icon: React.ReactNode;
  name: string;
  description: string;
}

export function TechBox({ icon, name, description }: TechBoxProps) {
  return (
    <div className="flex items-center space-x-4">
      <div className="flex justify-center items-center h-12  w-13 border border-border rounded">
        {icon}
      </div>
      <div className="flex flex-col space-y-1">
        <span>{name}</span>
        <span className="text-sm text-muted-foreground">{description}</span>
      </div>
    </div>
  );
}
