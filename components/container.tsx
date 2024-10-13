interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}
const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <div className="sm:px-2 md:px-4">{children}</div>
    </div>
  );
};

export default Container;
