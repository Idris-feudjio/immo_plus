type ButtonProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;

export default function Button({ children, ...props }: ButtonProps) {
  return <button {...props}>{children}</button>;
}
