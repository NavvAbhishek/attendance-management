import React, { useRef } from "react";
import { FaPrint } from "react-icons/fa";
import { useReactToPrint } from "react-to-print";

interface PrintProps {
  contentRef: React.RefObject<HTMLDivElement>;
}

const PrintAsPdf = ({ contentRef }: PrintProps) => {
  const handlePrint = useReactToPrint({
    content: () => contentRef.current,
  });
  return (
    <div className="flex gap-2 items-end justify-center mt-2">
      <h2 className="text-md text-dark-blue font-semibold">Print</h2>
      <FaPrint
        className="cursor-pointer mt-2 w-5 h-5"
        onClick={handlePrint}
        title="Print Classes"
      />
    </div>
  );
};

export default PrintAsPdf;
