import { ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
}

const Alert = ({ children }: AlertProps) => {
  return (
    <div className="alert alert-success alert-dismissible">
      <button type="button" className="btn-close" data-bs-dismiss="alert" />
      {children}
    </div>
  );
};

export default Alert;
