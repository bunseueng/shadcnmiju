"use client";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Download, FileSpreadsheet, FileText, Mail } from "lucide-react";
import { useState } from "react";

const ExportButtonGroup = () => {
  const [exporting, setExporting] = useState<string | null>(null);

  const handleExport = (format: string) => {
    setExporting(format);

    // Simulate export process
    setTimeout(() => {
      setExporting(null);
      console.log(`Exported as ${format}`);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full gap-3">
      <ButtonGroup>
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleExport("pdf")}
          disabled={!!exporting}
        >
          <FileText className="h-4 w-4" />
          {exporting === "pdf" ? "Exporting..." : "PDF"}
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleExport("excel")}
          disabled={!!exporting}
        >
          <FileSpreadsheet className="h-4 w-4" />
          {exporting === "excel" ? "Exporting..." : "Excel"}
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleExport("csv")}
          disabled={!!exporting}
        >
          <Download className="h-4 w-4" />
          {exporting === "csv" ? "Exporting..." : "CSV"}
        </Button>
        <Button variant="outline" size="sm" onClick={() => handleExport("email")}>
          <Mail className="h-4 w-4" />
          Email
        </Button>
      </ButtonGroup>

      {exporting && (
        <p className="text-xs text-slate-400">
          Exporting as{" "}
          <span className="text-slate-200 font-medium uppercase">
            {exporting}
          </span>
          ...
        </p>
      )}
    </div>
  );
};

export default ExportButtonGroup;
