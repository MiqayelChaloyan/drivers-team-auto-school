interface ButtonProps {
    variant: 'primary' | 'secondary';
    onClick: () => void; 
  }
  
  const Button: React.FC<ButtonProps> = ({ 
    variant,
    onClick  
  }) => {
  
    return (
      <button 
        className={`btn btn-${variant}`}
        onClick={onClick}
      >
        {variant}
      </button>
    )
  }