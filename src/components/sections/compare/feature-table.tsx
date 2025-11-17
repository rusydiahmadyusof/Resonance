import {
  LightningBoltIcon,
  MixerHorizontalIcon,
  SpeakerLoudIcon,
  MagicWandIcon,
  HeartIcon,
  CursorArrowIcon,
  LapTimerIcon,
  RocketIcon,
  ChatBubbleIcon,
} from "@radix-ui/react-icons";
import { compareFeatures } from "@/data/products";
import { IconBadge } from "@/components/ui/icon-badge";

const ICON_MAP = {
  chip: LightningBoltIcon,
  noise: MixerHorizontalIcon,
  spatial: SpeakerLoudIcon,
  audio: MagicWandIcon,
  health: HeartIcon,
  touch: CursorArrowIcon,
  battery: LapTimerIcon,
  water: RocketIcon,
  mic: ChatBubbleIcon,
} as const;

export const FeatureTable = () => (
  <div className="rounded-[2.5rem] bg-parchment/80 p-8 shadow-[0_30px_60px_rgba(35,24,16,0.12)]">
    <ul className="divide-y divide-white/60">
      {compareFeatures.map((feature) => {
        const Icon = ICON_MAP[feature.icon];
        return (
          <li
            key={feature.id}
            className="grid grid-cols-1 gap-4 py-6 sm:grid-cols-[minmax(220px,1fr)_1fr_1fr] sm:items-center sm:gap-8 sm:py-5"
          >
            <div className="flex items-center gap-3">
              <IconBadge icon={<Icon className="h-5 w-5 text-clay" />} />
              <span className="text-base font-semibold text-clay">
                {feature.label}
              </span>
            </div>
            <div className="flex items-center pl-8 text-base sm:pl-0">
              <span className="font-medium text-clay">{feature.auraValue}</span>
            </div>
            <div className="flex items-center pl-8 text-base sm:pl-0">
              <span className="font-medium text-clay/70">
                {feature.flowValue}
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  </div>
);

