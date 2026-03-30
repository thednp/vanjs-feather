import { type SVGTag } from "../../../src/types.ts";

import { Activity } from "../../../src/icons/Activity";
import { Airplay } from "../../../src/icons/Airplay";
import { AlertCircle } from "../../../src/icons/AlertCircle";
import { AlertOctagon } from "../../../src/icons/AlertOctagon";
import { AlertTriangle } from "../../../src/icons/AlertTriangle";
import { AlignCenter } from "../../../src/icons/AlignCenter";
import { AlignJustify } from "../../../src/icons/AlignJustify";
import { AlignLeft } from "../../../src/icons/AlignLeft";
import { AlignRight } from "../../../src/icons/AlignRight";
import { Anchor } from "../../../src/icons/Anchor";
import { Aperture } from "../../../src/icons/Aperture";
import { Archive } from "../../../src/icons/Archive";
import { ArrowDownCircle } from "../../../src/icons/ArrowDownCircle";
import { ArrowDownLeft } from "../../../src/icons/ArrowDownLeft";
import { ArrowDownRight } from "../../../src/icons/ArrowDownRight";
import { ArrowDown } from "../../../src/icons/ArrowDown";
import { ArrowLeftCircle } from "../../../src/icons/ArrowLeftCircle";
import { ArrowLeft } from "../../../src/icons/ArrowLeft";
import { ArrowRightCircle } from "../../../src/icons/ArrowRightCircle";
import { ArrowRight } from "../../../src/icons/ArrowRight";
import { ArrowUpCircle } from "../../../src/icons/ArrowUpCircle";
import { ArrowUpLeft } from "../../../src/icons/ArrowUpLeft";
import { ArrowUpRight } from "../../../src/icons/ArrowUpRight";
import { ArrowUp } from "../../../src/icons/ArrowUp";
import { AtSign } from "../../../src/icons/AtSign";
import { Award } from "../../../src/icons/Award";
import { BarChart2 } from "../../../src/icons/BarChart2";
import { BarChart } from "../../../src/icons/BarChart";
import { BatteryCharging } from "../../../src/icons/BatteryCharging";
import { Battery } from "../../../src/icons/Battery";
import { BellOff } from "../../../src/icons/BellOff";
import { Bell } from "../../../src/icons/Bell";
import { Bluetooth } from "../../../src/icons/Bluetooth";
import { Bold } from "../../../src/icons/Bold";
import { BookOpen } from "../../../src/icons/BookOpen";
import { Book } from "../../../src/icons/Book";
import { Bookmark } from "../../../src/icons/Bookmark";
import { Box } from "../../../src/icons/Box";
import { Briefcase } from "../../../src/icons/Briefcase";
import { Calendar } from "../../../src/icons/Calendar";
import { CameraOff } from "../../../src/icons/CameraOff";
import { Camera } from "../../../src/icons/Camera";
import { Cast } from "../../../src/icons/Cast";
import { CheckCircle } from "../../../src/icons/CheckCircle";
import { CheckSquare } from "../../../src/icons/CheckSquare";
import { Check } from "../../../src/icons/Check";
import { ChevronDown } from "../../../src/icons/ChevronDown";
import { ChevronLeft } from "../../../src/icons/ChevronLeft";
import { ChevronRight } from "../../../src/icons/ChevronRight";
import { ChevronUp } from "../../../src/icons/ChevronUp";
import { ChevronsDown } from "../../../src/icons/ChevronsDown";
import { ChevronsLeft } from "../../../src/icons/ChevronsLeft";
import { ChevronsRight } from "../../../src/icons/ChevronsRight";
import { ChevronsUp } from "../../../src/icons/ChevronsUp";
import { Chrome } from "../../../src/icons/Chrome";
import { Circle } from "../../../src/icons/Circle";
import { Clipboard } from "../../../src/icons/Clipboard";
import { Clock } from "../../../src/icons/Clock";
import { CloudDrizzle } from "../../../src/icons/CloudDrizzle";
import { CloudLightning } from "../../../src/icons/CloudLightning";
import { CloudOff } from "../../../src/icons/CloudOff";
import { CloudRain } from "../../../src/icons/CloudRain";
import { CloudSnow } from "../../../src/icons/CloudSnow";
import { Cloud } from "../../../src/icons/Cloud";

export const startIcons: Record<string, SVGTag>[] = [
  { Activity },
  { Airplay },
  { AlertCircle },
  { AlertOctagon },
  { AlertTriangle },
  { AlignCenter },
  { AlignJustify },
  { AlignLeft },
  { AlignRight },
  { Anchor },
  { Aperture },
  { Archive },
  { ArrowDownCircle },
  { ArrowDownLeft },
  { ArrowDownRight },
  { ArrowDown },
  { ArrowLeftCircle },
  { ArrowLeft },
  { ArrowRightCircle },
  { ArrowRight },
  { ArrowUpCircle },
  { ArrowUpLeft },
  { ArrowUpRight },
  { ArrowUp },
  { AtSign },
  { Award },
  { BarChart2 },
  { BarChart },
  { BatteryCharging },
  { Battery },
  { BellOff },
  { Bell },
  { Bluetooth },
  { Bold },
  { BookOpen },
  { Book },
  { Bookmark },
  { Box },
  { Briefcase },
  { Calendar },
  { CameraOff },
  { Camera },
  { Cast },
  { CheckCircle },
  { CheckSquare },
  { Check },
  { ChevronDown },
  { ChevronLeft },
  { ChevronRight },
  { ChevronUp },
  { ChevronsDown },
  { ChevronsLeft },
  { ChevronsRight },
  { ChevronsUp },
  { Chrome },
  { Circle },
  { Clipboard },
  { Clock },
  { CloudDrizzle },
  { CloudLightning },
  { CloudOff },
  { CloudRain },
  { CloudSnow },
  { Cloud },
];

let allIcons: Record<string, SVGTag>;

export const fetchIcons = async (items: string[]) => {
  const len = items.length;
  allIcons = allIcons || await import(`../../../src/index.ts`);

  const newIcons: Record<string, SVGTag>[] = [];

  for (let i = 0; i < len; i++) {
    const name = items[i];
    const icon = allIcons[name];
    newIcons.push({ [name]: icon });
  }

  return newIcons;
};
