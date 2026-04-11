"use client";

/**
 * Vertical process flow / flowchart for MDX.
 * Supports up to 12 steps with optional branching (IF success / IF fail).
 * Uses flat props because MDX doesn't support array/object props.
 *
 * Each step: step1 / sub1 (optional subtitle) / branch1 ("success" | "fail" | "back:N")
 * Branch steps: successLabel1 / failLabel1 / failTarget1 (step number to go back to)
 */

interface ProcessFlowProps {
  [key: string]: string | undefined;
}

interface Step {
  label: string;
  sub?: string;
  successLabel?: string;
  failLabel?: string;
  failTarget?: number;
  isBranch?: boolean;
}

export function ProcessFlow(props: ProcessFlowProps) {
  const steps: Step[] = [];

  for (let n = 1; n <= 12; n++) {
    const label = props[`step${n}`];
    if (!label) break;
    steps.push({
      label,
      sub: props[`sub${n}`],
      isBranch: props[`branch${n}`] === "true",
      successLabel: props[`successLabel${n}`],
      failLabel: props[`failLabel${n}`],
      failTarget: props[`failTarget${n}`] ? Number(props[`failTarget${n}`]) : undefined,
    });
  }

  if (steps.length === 0) return null;

  return (
    <div className="my-8 p-6 md:p-8 bg-card rounded-lg border border-border overflow-x-auto">
      <div className="flex flex-col items-center gap-0">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col items-center w-full">
            {/* Connector line from previous step */}
            {i > 0 && (
              <div className="w-px h-6 bg-border" />
            )}

            {step.isBranch ? (
              /* Diamond-shaped branch node */
              <div className="flex flex-col items-center w-full">
                <div className="relative w-full max-w-xs">
                  {/* Diamond */}
                  <div className="w-full aspect-[2/1] flex items-center justify-center">
                    <div
                      className="absolute inset-0 m-auto w-48 h-24 bg-card border-2 border-primary/50 rotate-0"
                      style={{
                        clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                      }}
                    />
                    <span className="relative z-10 text-xs md:text-sm font-medium text-foreground text-center px-4 leading-tight">
                      {step.label}
                    </span>
                  </div>
                </div>

                {/* Branch arms */}
                <div className="flex items-start justify-center gap-8 md:gap-16 w-full mt-2">
                  {/* Success branch (left) */}
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-px h-4 bg-emerald-500/50" />
                    <div className="px-3 py-1.5 rounded-md bg-emerald-500/10 border border-emerald-500/30">
                      <span className="text-xs text-emerald-400 font-medium whitespace-nowrap">
                        {step.successLabel || "Success"}
                      </span>
                    </div>
                    <svg viewBox="0 0 12 10" fill="none" className="w-3 h-3 text-emerald-500/50 rotate-90">
                      <path d="M7 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>

                  {/* Fail branch (right) */}
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-px h-4 bg-red-500/50" />
                    <div className="px-3 py-1.5 rounded-md bg-red-500/10 border border-red-500/30">
                      <span className="text-xs text-red-400 font-medium whitespace-nowrap">
                        {step.failLabel || "Fail"}
                      </span>
                    </div>
                    {step.failTarget && (
                      <span className="text-[10px] text-muted-foreground">
                        ↩ step {step.failTarget}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              /* Regular step node */
              <div className="w-full max-w-sm">
                <div className="px-4 py-3 rounded-lg bg-secondary/50 border border-border hover:border-primary/30 transition-colors">
                  <div className="flex items-start gap-3">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-primary/15 text-primary text-xs font-bold flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-foreground leading-snug">
                        {step.label}
                      </p>
                      {step.sub && (
                        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                          {step.sub}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
