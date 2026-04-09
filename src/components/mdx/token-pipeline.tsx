"use client";

/**
 * Horizontal pipeline diagram for MDX.
 * Each step: icon + label, connected by arrows.
 * Uses flat props (icon1/label1 … icon4/label4) because MDX doesn't support array/object props.
 */

type IconKey = "figma" | "token-studio" | "github" | "storybook";

const FigmaIcon = () => (
  <svg viewBox="0 0 38 57" fill="none" className="w-8 h-8">
    <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
    <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
    <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
    <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
    <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
  </svg>
);

const TokenStudioIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
    <rect width="24" height="24" rx="4" fill="currentColor" className="text-foreground"/>
    <circle cx="8" cy="8" r="3.5" fill="var(--background)"/>
    <circle cx="16" cy="8" r="3.5" fill="var(--background)"/>
    <circle cx="8" cy="16" r="3.5" fill="var(--background)"/>
    <circle cx="16" cy="16" r="3.5" fill="var(--background)"/>
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-foreground">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const StorybookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
    <rect x="1" y="1" width="22" height="22" rx="4" fill="#FF4785"/>
    <path d="M15.5 4L15.7 6.5L14.2 5.8L13.2 6.7L13 4H8V20H16.5V4H15.5Z" fill="white"/>
    <path d="M13.3 11.6C13.3 11.6 14.8 11 14.8 9.8C14.8 8.3 13.6 7.8 12.2 7.8C10.8 7.8 9.3 8.3 9.2 10.2L11 10.4C11 9.7 11.3 9.3 12.1 9.3C12.7 9.3 13 9.6 13 10.1C13 10.8 12.2 11.1 11.6 11.1V12.5C11.6 12.5 13.2 12.3 13.2 13.5C13.2 14.1 12.8 14.6 12 14.6C11.1 14.6 10.7 14.1 10.7 13.3L8.9 13.5C9 15.6 10.5 16.2 12.1 16.2C13.7 16.2 15.1 15.3 15.1 13.6C15.1 12.3 13.3 11.6 13.3 11.6Z" fill="white"/>
  </svg>
);

const Arrow = () => (
  <div className="flex items-center text-muted-foreground shrink-0 mx-1">
    <div className="w-6 md:w-10 h-px bg-border" />
    <svg viewBox="0 0 12 10" fill="none" className="w-3 h-3 -ml-px">
      <path d="M7 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
);

const iconMap: Record<IconKey, React.FC> = {
  figma: FigmaIcon,
  "token-studio": TokenStudioIcon,
  github: GitHubIcon,
  storybook: StorybookIcon,
};

interface TokenPipelineProps {
  icon1: IconKey;
  label1: string;
  icon2: IconKey;
  label2: string;
  icon3?: IconKey;
  label3?: string;
  icon4?: IconKey;
  label4?: string;
}

export function TokenPipeline(props: TokenPipelineProps) {
  const steps: { icon: IconKey; label: string }[] = [];
  for (let n = 1; n <= 4; n++) {
    const icon = props[`icon${n}` as keyof TokenPipelineProps] as IconKey | undefined;
    const label = props[`label${n}` as keyof TokenPipelineProps] as string | undefined;
    if (icon && label) steps.push({ icon, label });
  }

  return (
    <div className="my-8 p-6 md:p-8 bg-card rounded-lg border border-border overflow-x-auto">
      <div className="flex items-center justify-between min-w-[540px]">
        {steps.map((step, i) => {
          const Icon = iconMap[step.icon];
          return (
            <div key={i} className="contents">
              {i > 0 && <Arrow />}
              <div className="flex flex-col items-center text-center gap-3 flex-1 min-w-0 px-1">
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                  <Icon />
                </div>
                <span className="text-xs md:text-sm text-foreground/80 leading-snug">
                  {step.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
