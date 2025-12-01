import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const comparisonColumns = [
  { 
    key: "jobs", 
    mainLabel: "東京中央労働組合", 
    subLabel: "（正式認証、法人格あり）",
    label: "東京中央労働組合（正式認証、法人格あり）", 
    accent: "comparison-col comparison-col--jobs" 
  },
  { 
    key: "general", 
    mainLabel: "正式に認証されてない", 
    subLabel: "労働組合(または提携)",
    label: "正式に認証されてない 労働組合（または提携）", 
    accent: "comparison-col comparison-col--general" 
  },
  { 
    key: "laborUnion", 
    mainLabel: "民間企業", 
    subLabel: "(交渉は違法です)",
    label: "民間企業（交渉は違法です）", 
    accent: "comparison-col comparison-col--labor" 
  },
  { 
    key: "lawyer", 
    mainLabel: "弁護士", 
    subLabel: "",
    label: "弁護士", 
    accent: "comparison-col comparison-col--lawyer" 
  },
] as const;

type ColumnKey = (typeof comparisonColumns)[number]["key"];

const comparisonRows: { label: string; values: Record<ColumnKey, string> }[] = [
  {
    label: "会社との退職交渉",
    values: {
      jobs: "〇",
      general: "△",
      laborUnion: "×",
      lawyer: "〇",
    },
  },
  {
    label: "退職手続きサポート",
    values: {
      jobs: "〇",
      general: "〇",
      laborUnion: "△",
      lawyer: "〇",
    },
  },
  {
    label: "裁判の代理人",
    values: {
      jobs: "×",
      general: "×",
      laborUnion: "×",
      lawyer: "〇",
    },
  },
  {
    label: "費用の平均相場",
    values: {
      jobs: "24000円 (税込み)",
      general: "2万円~3万円",
      laborUnion: "1.5万円~2.5万円",
      lawyer: "3万円~7万円",
    },
  },
];

const columnColorMap: Record<ColumnKey, { header: string; body: string }> = {
  jobs: { header: "#b3d9ff", body: "#e6f2ff" }, // Light blue for highlight
  general: { header: "#f3dfb7", body: "#fffaf1" },
  laborUnion: { header: "#f8e8c9", body: "#fffaf1" },
  lawyer: { header: "#fff1d6", body: "#fffaf1" },
};

const TableSection = () => {
  return (
    <section className="comparison-section py-10 md:py-14 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="comparison-header">
          <p className="comparison-kicker trust-section__title section-title">
            東京中央労働組合と他社との比較
          </p>
        </div>

        <div className="comparison-title-wrapper mb-6 text-center">
          <p className="comparison-subtitle text-sm md:text-base text-gray-600">
            安心して会社と退職の交渉を任せられるのは
            正式に認証された労働組合法人と弁護士だけです。
          </p>
        </div>

        <TableContainer
          component={Paper}
          sx={{
            borderRadius: 3,
            boxShadow: "0 18px 45px rgba(15, 23, 42, 0.08)",
            overflowX: "auto",
          }}
        >
          <Table
            sx={{
              minWidth: { xs: "100%", md: 700 },
              "& .MuiTableCell-root": {
                fontFamily: '"Noto Sans JP", "Yu Gothic", "Meiryo", sans-serif',
                fontSize: { xs: "0.75rem", sm: "0.875rem", md: "0.95rem" },
                padding: { xs: "10px 6px", sm: "12px 8px", md: "16px" },
              },
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    bgcolor: "#dfe7f3",
                    fontWeight: 700,
                    minWidth: { xs: "80px", md: "140px" },
                  }}
                />
                {comparisonColumns.map((column) => (
                  <TableCell
                    key={column.key}
                    align="center"
                    sx={{
                      fontWeight: column.key === "jobs" ? 700 : 400,
                      bgcolor: columnColorMap[column.key].header,
                      color: "#000000",
                      lineHeight: 1.4,
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: column.key === "jobs" ? 700 : 400 }}>
                        {column.mainLabel}
                      </div>
                      {column.subLabel && (
                        <div 
                          style={{ 
                            fontSize: "0.9em",
                            fontWeight: column.key === "jobs" ? 700 : 400,
                            marginTop: "2px"
                          }}
                        >
                          {column.subLabel}
                        </div>
                      )}
                    </div>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {comparisonRows.map((row, rowIndex) => (
                <TableRow
                  key={row.label}
                  sx={{
                    "&:nth-of-type(even)": { backgroundColor: "#f9fafc" },
                  }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{
                      fontWeight: 600,
                      bgcolor: "#edf2fb",
                    }}
                  >
                    {row.label}
                  </TableCell>
                  {comparisonColumns.map((column) => (
                    <TableCell
                      key={`${row.label}-${column.key}`}
                      align="center"
                      sx={{
                        bgcolor: columnColorMap[column.key].body,
                        fontWeight:
                          column.key === "jobs" 
                            ? 700 // Bold for jobs column
                            : rowIndex === comparisonRows.length - 1 
                            ? 600 
                            : 500,
                        color: "#000000", // Black text
                        whiteSpace: { xs: "normal", md: "nowrap" },
                      }}
                    >
                      {row.values[column.key]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <p className="comparison-note">※認証されてない労働組合や、労働組合と「提携」しているだけの退職代行には違法の可能性があります。</p>
      </div>
    </section>
  );
};

export default TableSection;

