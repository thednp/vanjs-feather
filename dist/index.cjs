"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Activity: () => Activity,
  Airplay: () => Airplay,
  AlertCircle: () => AlertCircle,
  AlertOctagon: () => AlertOctagon,
  AlertTriangle: () => AlertTriangle,
  AlignCenter: () => AlignCenter,
  AlignJustify: () => AlignJustify,
  AlignLeft: () => AlignLeft,
  AlignRight: () => AlignRight,
  Anchor: () => Anchor,
  Aperture: () => Aperture,
  Archive: () => Archive,
  ArrowDown: () => ArrowDown,
  ArrowDownCircle: () => ArrowDownCircle,
  ArrowDownLeft: () => ArrowDownLeft,
  ArrowDownRight: () => ArrowDownRight,
  ArrowLeft: () => ArrowLeft,
  ArrowLeftCircle: () => ArrowLeftCircle,
  ArrowRight: () => ArrowRight,
  ArrowRightCircle: () => ArrowRightCircle,
  ArrowUp: () => ArrowUp,
  ArrowUpCircle: () => ArrowUpCircle,
  ArrowUpLeft: () => ArrowUpLeft,
  ArrowUpRight: () => ArrowUpRight,
  AtSign: () => AtSign,
  Award: () => Award,
  BarChart: () => BarChart,
  BarChart2: () => BarChart2,
  Battery: () => Battery,
  BatteryCharging: () => BatteryCharging,
  Bell: () => Bell,
  BellOff: () => BellOff,
  Bluetooth: () => Bluetooth,
  Bold: () => Bold,
  Book: () => Book,
  BookOpen: () => BookOpen,
  Bookmark: () => Bookmark,
  Box: () => Box,
  Briefcase: () => Briefcase,
  Calendar: () => Calendar,
  Camera: () => Camera,
  CameraOff: () => CameraOff,
  Cast: () => Cast,
  Check: () => Check,
  CheckCircle: () => CheckCircle,
  CheckSquare: () => CheckSquare,
  ChevronDown: () => ChevronDown,
  ChevronLeft: () => ChevronLeft,
  ChevronRight: () => ChevronRight,
  ChevronUp: () => ChevronUp,
  ChevronsDown: () => ChevronsDown,
  ChevronsLeft: () => ChevronsLeft,
  ChevronsRight: () => ChevronsRight,
  ChevronsUp: () => ChevronsUp,
  Chrome: () => Chrome,
  Circle: () => Circle,
  Clipboard: () => Clipboard,
  Clock: () => Clock,
  Cloud: () => Cloud,
  CloudDrizzle: () => CloudDrizzle,
  CloudLightning: () => CloudLightning,
  CloudOff: () => CloudOff,
  CloudRain: () => CloudRain,
  CloudSnow: () => CloudSnow,
  Code: () => Code,
  Codepen: () => Codepen,
  Codesandbox: () => Codesandbox,
  Coffee: () => Coffee,
  Columns: () => Columns,
  Command: () => Command,
  Compass: () => Compass,
  Copy: () => Copy,
  CornerDownLeft: () => CornerDownLeft,
  CornerDownRight: () => CornerDownRight,
  CornerLeftDown: () => CornerLeftDown,
  CornerLeftUp: () => CornerLeftUp,
  CornerRightDown: () => CornerRightDown,
  CornerRightUp: () => CornerRightUp,
  CornerUpLeft: () => CornerUpLeft,
  CornerUpRight: () => CornerUpRight,
  Cpu: () => Cpu,
  CreditCard: () => CreditCard,
  Crop: () => Crop,
  Crosshair: () => Crosshair,
  Database: () => Database,
  Delete: () => Delete,
  Disc: () => Disc,
  Divide: () => Divide,
  DivideCircle: () => DivideCircle,
  DivideSquare: () => DivideSquare,
  DollarSign: () => DollarSign,
  Download: () => Download,
  DownloadCloud: () => DownloadCloud,
  Dribbble: () => Dribbble,
  Droplet: () => Droplet,
  Edit: () => Edit,
  Edit2: () => Edit2,
  Edit3: () => Edit3,
  ExternalLink: () => ExternalLink,
  Eye: () => Eye,
  EyeOff: () => EyeOff,
  Facebook: () => Facebook,
  FastForward: () => FastForward,
  Feather: () => Feather,
  Figma: () => Figma,
  File: () => File,
  FileMinus: () => FileMinus,
  FilePlus: () => FilePlus,
  FileText: () => FileText,
  Film: () => Film,
  Filter: () => Filter,
  Flag: () => Flag,
  Folder: () => Folder,
  FolderMinus: () => FolderMinus,
  FolderPlus: () => FolderPlus,
  Framer: () => Framer,
  Frown: () => Frown,
  Gift: () => Gift,
  GitBranch: () => GitBranch,
  GitCommit: () => GitCommit,
  GitMerge: () => GitMerge,
  GitPullRequest: () => GitPullRequest,
  Github: () => Github,
  Gitlab: () => Gitlab,
  Globe: () => Globe,
  Grid: () => Grid,
  HardDrive: () => HardDrive,
  Hash: () => Hash,
  Headphones: () => Headphones,
  Heart: () => Heart,
  HelpCircle: () => HelpCircle,
  Hexagon: () => Hexagon,
  Home: () => Home,
  Image: () => Image,
  Inbox: () => Inbox,
  Info: () => Info,
  Instagram: () => Instagram,
  Italic: () => Italic,
  Key: () => Key,
  Layers: () => Layers,
  Layout: () => Layout,
  LifeBuoy: () => LifeBuoy,
  Link: () => Link,
  Link2: () => Link2,
  Linkedin: () => Linkedin,
  List: () => List,
  Loader: () => Loader,
  Lock: () => Lock,
  LogIn: () => LogIn,
  LogOut: () => LogOut,
  Mail: () => Mail,
  Map: () => Map,
  MapPin: () => MapPin,
  Maximize: () => Maximize,
  Maximize2: () => Maximize2,
  Meh: () => Meh,
  Menu: () => Menu,
  MessageCircle: () => MessageCircle,
  MessageSquare: () => MessageSquare,
  Mic: () => Mic,
  MicOff: () => MicOff,
  Minimize: () => Minimize,
  Minimize2: () => Minimize2,
  Minus: () => Minus,
  MinusCircle: () => MinusCircle,
  MinusSquare: () => MinusSquare,
  Monitor: () => Monitor,
  Moon: () => Moon,
  MoreHorizontal: () => MoreHorizontal,
  MoreVertical: () => MoreVertical,
  MousePointer: () => MousePointer,
  Move: () => Move,
  Music: () => Music,
  Navigation: () => Navigation,
  Navigation2: () => Navigation2,
  Octagon: () => Octagon,
  Package: () => Package,
  Paperclip: () => Paperclip,
  Pause: () => Pause,
  PauseCircle: () => PauseCircle,
  PenTool: () => PenTool,
  Percent: () => Percent,
  Phone: () => Phone,
  PhoneCall: () => PhoneCall,
  PhoneForwarded: () => PhoneForwarded,
  PhoneIncoming: () => PhoneIncoming,
  PhoneMissed: () => PhoneMissed,
  PhoneOff: () => PhoneOff,
  PhoneOutgoing: () => PhoneOutgoing,
  PieChart: () => PieChart,
  Play: () => Play,
  PlayCircle: () => PlayCircle,
  Plus: () => Plus,
  PlusCircle: () => PlusCircle,
  PlusSquare: () => PlusSquare,
  Pocket: () => Pocket,
  Power: () => Power,
  Printer: () => Printer,
  Radio: () => Radio,
  RefreshCcw: () => RefreshCcw,
  RefreshCw: () => RefreshCw,
  Repeat: () => Repeat,
  Rewind: () => Rewind,
  RotateCcw: () => RotateCcw,
  RotateCw: () => RotateCw,
  Rss: () => Rss,
  Save: () => Save,
  Scissors: () => Scissors,
  Search: () => Search,
  Send: () => Send,
  Server: () => Server,
  Settings: () => Settings,
  Share: () => Share,
  Share2: () => Share2,
  Shield: () => Shield,
  ShieldOff: () => ShieldOff,
  ShoppingBag: () => ShoppingBag,
  ShoppingCart: () => ShoppingCart,
  Shuffle: () => Shuffle,
  Sidebar: () => Sidebar,
  SkipBack: () => SkipBack,
  SkipForward: () => SkipForward,
  Slack: () => Slack,
  Slash: () => Slash,
  Sliders: () => Sliders,
  Smartphone: () => Smartphone,
  Smile: () => Smile,
  Speaker: () => Speaker,
  Square: () => Square,
  Star: () => Star,
  StopCircle: () => StopCircle,
  Sun: () => Sun,
  Sunrise: () => Sunrise,
  Sunset: () => Sunset,
  Table: () => Table,
  Tablet: () => Tablet,
  Tag: () => Tag,
  Target: () => Target,
  Terminal: () => Terminal,
  Thermometer: () => Thermometer,
  ThumbsDown: () => ThumbsDown,
  ThumbsUp: () => ThumbsUp,
  ToggleLeft: () => ToggleLeft,
  ToggleRight: () => ToggleRight,
  Tool: () => Tool,
  Trash: () => Trash,
  Trash2: () => Trash2,
  Trello: () => Trello,
  TrendingDown: () => TrendingDown,
  TrendingUp: () => TrendingUp,
  Triangle: () => Triangle,
  Truck: () => Truck,
  Tv: () => Tv,
  Twitch: () => Twitch,
  Twitter: () => Twitter,
  Type: () => Type,
  Umbrella: () => Umbrella,
  Underline: () => Underline,
  Unlock: () => Unlock,
  Upload: () => Upload,
  UploadCloud: () => UploadCloud,
  User: () => User,
  UserCheck: () => UserCheck,
  UserMinus: () => UserMinus,
  UserPlus: () => UserPlus,
  UserX: () => UserX,
  Users: () => Users,
  Video: () => Video,
  VideoOff: () => VideoOff,
  Voicemail: () => Voicemail,
  Volume: () => Volume,
  Volume1: () => Volume1,
  Volume2: () => Volume2,
  VolumeX: () => VolumeX,
  Watch: () => Watch,
  Wifi: () => Wifi,
  WifiOff: () => WifiOff,
  Wind: () => Wind,
  X: () => X,
  XCircle: () => XCircle,
  XOctagon: () => XOctagon,
  XSquare: () => XSquare,
  Youtube: () => Youtube,
  Zap: () => Zap,
  ZapOff: () => ZapOff,
  ZoomIn: () => ZoomIn,
  ZoomOut: () => ZoomOut
});
module.exports = __toCommonJS(index_exports);

// src/icons/Activity.ts
var import_vanjs_core2 = __toESM(require("vanjs-core"), 1);

// src/FeatherIcon.ts
var import_vanjs_core = __toESM(require("vanjs-core"), 1);
var svgNamespace = "http://www.w3.org/2000/svg";
var FeatherIcon = /* @__PURE__ */ __name((initialProps = {}, ...children) => {
  const { svg } = import_vanjs_core.default.tags(svgNamespace);
  const props = Object.fromEntries(
    Object.entries(initialProps).filter(([_, val]) => val)
  );
  const defaultProps = {
    xmlns: svgNamespace,
    viewBox: "0 0 24 24",
    fill: "none",
    width: 24,
    height: 24,
    stroke: "currentColor",
    "stroke-width": 2,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  };
  return svg(
    {
      ...defaultProps,
      ...props
    },
    children
  );
}, "FeatherIcon");

// src/icons/Activity.ts
var Activity = /* @__PURE__ */ __name((props) => {
  const { polyline } = import_vanjs_core2.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "22 12 18 12 15 21 9 3 6 12 2 12"
    })
  );
}, "Activity");

// src/icons/Airplay.ts
var import_vanjs_core3 = __toESM(require("vanjs-core"), 1);
var Airplay = /* @__PURE__ */ __name((props) => {
  const { path, polygon } = import_vanjs_core3.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"
    }),
    polygon({
      points: "12 15 17 21 7 21 12 15"
    })
  );
}, "Airplay");

// src/icons/AlertCircle.ts
var import_vanjs_core4 = __toESM(require("vanjs-core"), 1);
var AlertCircle = /* @__PURE__ */ __name((props) => {
  const { circle, line } = import_vanjs_core4.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10"
    }),
    line({
      x1: "12",
      y1: "8",
      x2: "12",
      y2: "12"
    }),
    line({
      x1: "12",
      y1: "16",
      x2: "12.01",
      y2: "16"
    })
  );
}, "AlertCircle");

// src/icons/AlertOctagon.ts
var import_vanjs_core5 = __toESM(require("vanjs-core"), 1);
var AlertOctagon = /* @__PURE__ */ __name((props) => {
  const { polygon, line } = import_vanjs_core5.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    polygon({
      points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"
    }),
    line({
      x1: "12",
      y1: "8",
      x2: "12",
      y2: "12"
    }),
    line({
      x1: "12",
      y1: "16",
      x2: "12.01",
      y2: "16"
    })
  );
}, "AlertOctagon");

// src/icons/AlertTriangle.ts
var import_vanjs_core6 = __toESM(require("vanjs-core"), 1);
var AlertTriangle = /* @__PURE__ */ __name((props) => {
  const { path, line } = import_vanjs_core6.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
    }),
    line({
      x1: "12",
      y1: "9",
      x2: "12",
      y2: "13"
    }),
    line({
      x1: "12",
      y1: "17",
      x2: "12.01",
      y2: "17"
    })
  );
}, "AlertTriangle");

// src/icons/AlignCenter.ts
var import_vanjs_core7 = __toESM(require("vanjs-core"), 1);
var AlignCenter = /* @__PURE__ */ __name((props) => {
  const { line } = import_vanjs_core7.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "18",
      y1: "10",
      x2: "6",
      y2: "10"
    }),
    line({
      x1: "21",
      y1: "6",
      x2: "3",
      y2: "6"
    }),
    line({
      x1: "21",
      y1: "14",
      x2: "3",
      y2: "14"
    }),
    line({
      x1: "18",
      y1: "18",
      x2: "6",
      y2: "18"
    })
  );
}, "AlignCenter");

// src/icons/AlignJustify.ts
var import_vanjs_core8 = __toESM(require("vanjs-core"), 1);
var AlignJustify = /* @__PURE__ */ __name((props) => {
  const { line } = import_vanjs_core8.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "21",
      y1: "10",
      x2: "3",
      y2: "10"
    }),
    line({
      x1: "21",
      y1: "6",
      x2: "3",
      y2: "6"
    }),
    line({
      x1: "21",
      y1: "14",
      x2: "3",
      y2: "14"
    }),
    line({
      x1: "21",
      y1: "18",
      x2: "3",
      y2: "18"
    })
  );
}, "AlignJustify");

// src/icons/AlignLeft.ts
var import_vanjs_core9 = __toESM(require("vanjs-core"), 1);
var AlignLeft = /* @__PURE__ */ __name((props) => {
  const { line } = import_vanjs_core9.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "17",
      y1: "10",
      x2: "3",
      y2: "10"
    }),
    line({
      x1: "21",
      y1: "6",
      x2: "3",
      y2: "6"
    }),
    line({
      x1: "21",
      y1: "14",
      x2: "3",
      y2: "14"
    }),
    line({
      x1: "17",
      y1: "18",
      x2: "3",
      y2: "18"
    })
  );
}, "AlignLeft");

// src/icons/AlignRight.ts
var import_vanjs_core10 = __toESM(require("vanjs-core"), 1);
var AlignRight = /* @__PURE__ */ __name((props) => {
  const { line } = import_vanjs_core10.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "21",
      y1: "10",
      x2: "7",
      y2: "10"
    }),
    line({
      x1: "21",
      y1: "6",
      x2: "3",
      y2: "6"
    }),
    line({
      x1: "21",
      y1: "14",
      x2: "3",
      y2: "14"
    }),
    line({
      x1: "21",
      y1: "18",
      x2: "7",
      y2: "18"
    })
  );
}, "AlignRight");

// src/icons/Anchor.ts
var import_vanjs_core11 = __toESM(require("vanjs-core"), 1);
var Anchor = /* @__PURE__ */ __name((props) => {
  const { path, circle, line } = import_vanjs_core11.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "5",
      r: "3"
    }),
    line({
      x1: "12",
      y1: "22",
      x2: "12",
      y2: "8"
    }),
    path({
      d: "M5 12H2a10 10 0 0 0 20 0h-3"
    })
  );
}, "Anchor");

// src/icons/Aperture.ts
var import_vanjs_core12 = __toESM(require("vanjs-core"), 1);
var Aperture = /* @__PURE__ */ __name((props) => {
  const { circle, line } = import_vanjs_core12.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10"
    }),
    line({
      x1: "14.31",
      y1: "8",
      x2: "20.05",
      y2: "17.94"
    }),
    line({
      x1: "9.69",
      y1: "8",
      x2: "21.17",
      y2: "8"
    }),
    line({
      x1: "7.38",
      y1: "12",
      x2: "13.12",
      y2: "2.06"
    }),
    line({
      x1: "9.69",
      y1: "16",
      x2: "3.95",
      y2: "6.06"
    }),
    line({
      x1: "14.31",
      y1: "16",
      x2: "2.83",
      y2: "16"
    }),
    line({
      x1: "16.62",
      y1: "12",
      x2: "10.88",
      y2: "21.94"
    })
  );
}, "Aperture");

// src/icons/Archive.ts
var import_vanjs_core13 = __toESM(require("vanjs-core"), 1);
var Archive = /* @__PURE__ */ __name((props) => {
  const { polyline, line, rect } = import_vanjs_core13.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "21 8 21 21 3 21 3 8"
    }),
    rect({
      x: "1",
      y: "3",
      width: "22",
      height: "5"
    }),
    line({
      x1: "10",
      y1: "12",
      x2: "14",
      y2: "12"
    })
  );
}, "Archive");

// src/icons/ArrowDown.ts
var import_vanjs_core14 = __toESM(require("vanjs-core"), 1);
var ArrowDown = /* @__PURE__ */ __name((props) => {
  const { polyline, line } = import_vanjs_core14.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "12",
      y1: "5",
      x2: "12",
      y2: "19"
    }),
    polyline({
      points: "19 12 12 19 5 12"
    })
  );
}, "ArrowDown");

// src/icons/ArrowDownCircle.ts
var import_vanjs_core15 = __toESM(require("vanjs-core"), 1);
var ArrowDownCircle = /* @__PURE__ */ __name((props) => {
  const { polyline, circle, line } = import_vanjs_core15.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10"
    }),
    polyline({
      points: "8 12 12 16 16 12"
    }),
    line({
      x1: "12",
      y1: "8",
      x2: "12",
      y2: "16"
    })
  );
}, "ArrowDownCircle");

// src/icons/ArrowDownLeft.ts
var import_vanjs_core16 = __toESM(require("vanjs-core"), 1);
var ArrowDownLeft = /* @__PURE__ */ __name((props) => {
  const { polyline, line } = import_vanjs_core16.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "17",
      y1: "7",
      x2: "7",
      y2: "17"
    }),
    polyline({
      points: "17 17 7 17 7 7"
    })
  );
}, "ArrowDownLeft");

// src/icons/ArrowDownRight.ts
var import_vanjs_core17 = __toESM(require("vanjs-core"), 1);
var ArrowDownRight = /* @__PURE__ */ __name((props) => {
  const { polyline, line } = import_vanjs_core17.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "7",
      y1: "7",
      x2: "17",
      y2: "17"
    }),
    polyline({
      points: "17 7 17 17 7 17"
    })
  );
}, "ArrowDownRight");

// src/icons/ArrowLeft.ts
var import_vanjs_core18 = __toESM(require("vanjs-core"), 1);
var ArrowLeft = /* @__PURE__ */ __name((props) => {
  const { polyline, line } = import_vanjs_core18.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "19",
      y1: "12",
      x2: "5",
      y2: "12"
    }),
    polyline({
      points: "12 19 5 12 12 5"
    })
  );
}, "ArrowLeft");

// src/icons/ArrowLeftCircle.ts
var import_vanjs_core19 = __toESM(require("vanjs-core"), 1);
var ArrowLeftCircle = /* @__PURE__ */ __name((props) => {
  const { polyline, circle, line } = import_vanjs_core19.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10"
    }),
    polyline({
      points: "12 8 8 12 12 16"
    }),
    line({
      x1: "16",
      y1: "12",
      x2: "8",
      y2: "12"
    })
  );
}, "ArrowLeftCircle");

// src/icons/ArrowRight.ts
var import_vanjs_core20 = __toESM(require("vanjs-core"), 1);
var ArrowRight = /* @__PURE__ */ __name((props) => {
  const { polyline, line } = import_vanjs_core20.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "5",
      y1: "12",
      x2: "19",
      y2: "12"
    }),
    polyline({
      points: "12 5 19 12 12 19"
    })
  );
}, "ArrowRight");

// src/icons/ArrowRightCircle.ts
var import_vanjs_core21 = __toESM(require("vanjs-core"), 1);
var ArrowRightCircle = /* @__PURE__ */ __name((props) => {
  const { polyline, circle, line } = import_vanjs_core21.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10"
    }),
    polyline({
      points: "12 16 16 12 12 8"
    }),
    line({
      x1: "8",
      y1: "12",
      x2: "16",
      y2: "12"
    })
  );
}, "ArrowRightCircle");

// src/icons/ArrowUp.ts
var import_vanjs_core22 = __toESM(require("vanjs-core"), 1);
var ArrowUp = /* @__PURE__ */ __name((props) => {
  const { polyline, line } = import_vanjs_core22.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "12",
      y1: "19",
      x2: "12",
      y2: "5"
    }),
    polyline({
      points: "5 12 12 5 19 12"
    })
  );
}, "ArrowUp");

// src/icons/ArrowUpCircle.ts
var import_vanjs_core23 = __toESM(require("vanjs-core"), 1);
var ArrowUpCircle = /* @__PURE__ */ __name((props) => {
  const { polyline, circle, line } = import_vanjs_core23.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10"
    }),
    polyline({
      points: "16 12 12 8 8 12"
    }),
    line({
      x1: "12",
      y1: "16",
      x2: "12",
      y2: "8"
    })
  );
}, "ArrowUpCircle");

// src/icons/ArrowUpLeft.ts
var import_vanjs_core24 = __toESM(require("vanjs-core"), 1);
var ArrowUpLeft = /* @__PURE__ */ __name((props) => {
  const { polyline, line } = import_vanjs_core24.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "17",
      y1: "17",
      x2: "7",
      y2: "7"
    }),
    polyline({
      points: "7 17 7 7 17 7"
    })
  );
}, "ArrowUpLeft");

// src/icons/ArrowUpRight.ts
var import_vanjs_core25 = __toESM(require("vanjs-core"), 1);
var ArrowUpRight = /* @__PURE__ */ __name((props) => {
  const { polyline, line } = import_vanjs_core25.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "7",
      y1: "17",
      x2: "17",
      y2: "7"
    }),
    polyline({
      points: "7 7 17 7 17 17"
    })
  );
}, "ArrowUpRight");

// src/icons/AtSign.ts
var import_vanjs_core26 = __toESM(require("vanjs-core"), 1);
var AtSign = /* @__PURE__ */ __name((props) => {
  const { path, circle } = import_vanjs_core26.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "4"
    }),
    path({
      d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"
    })
  );
}, "AtSign");

// src/icons/Award.ts
var import_vanjs_core27 = __toESM(require("vanjs-core"), 1);
var Award = /* @__PURE__ */ __name((props) => {
  const { polyline, circle } = import_vanjs_core27.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "8",
      r: "7"
    }),
    polyline({
      points: "8.21 13.89 7 23 12 20 17 23 15.79 13.88"
    })
  );
}, "Award");

// src/icons/BarChart.ts
var import_vanjs_core28 = __toESM(require("vanjs-core"), 1);
var BarChart = /* @__PURE__ */ __name((props) => {
  const { line } = import_vanjs_core28.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "12",
      y1: "20",
      x2: "12",
      y2: "10"
    }),
    line({
      x1: "18",
      y1: "20",
      x2: "18",
      y2: "4"
    }),
    line({
      x1: "6",
      y1: "20",
      x2: "6",
      y2: "16"
    })
  );
}, "BarChart");

// src/icons/BarChart2.ts
var import_vanjs_core29 = __toESM(require("vanjs-core"), 1);
var BarChart2 = /* @__PURE__ */ __name((props) => {
  const { line } = import_vanjs_core29.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "18",
      y1: "20",
      x2: "18",
      y2: "10"
    }),
    line({
      x1: "12",
      y1: "20",
      x2: "12",
      y2: "4"
    }),
    line({
      x1: "6",
      y1: "20",
      x2: "6",
      y2: "14"
    })
  );
}, "BarChart2");

// src/icons/Battery.ts
var import_vanjs_core30 = __toESM(require("vanjs-core"), 1);
var Battery = /* @__PURE__ */ __name((props) => {
  const { line, rect } = import_vanjs_core30.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "1",
      y: "6",
      width: "18",
      height: "12",
      rx: "2",
      ry: "2"
    }),
    line({
      x1: "23",
      y1: "13",
      x2: "23",
      y2: "11"
    })
  );
}, "Battery");

// src/icons/BatteryCharging.ts
var import_vanjs_core31 = __toESM(require("vanjs-core"), 1);
var BatteryCharging = /* @__PURE__ */ __name((props) => {
  const { polyline, path, line } = import_vanjs_core31.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"
    }),
    line({
      x1: "23",
      y1: "13",
      x2: "23",
      y2: "11"
    }),
    polyline({
      points: "11 6 7 12 13 12 9 18"
    })
  );
}, "BatteryCharging");

// src/icons/Bell.ts
var import_vanjs_core32 = __toESM(require("vanjs-core"), 1);
var Bell = /* @__PURE__ */ __name((props) => {
  const { path } = import_vanjs_core32.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
    }),
    path({
      d: "M13.73 21a2 2 0 0 1-3.46 0"
    })
  );
}, "Bell");

// src/icons/BellOff.ts
var import_vanjs_core33 = __toESM(require("vanjs-core"), 1);
var BellOff = /* @__PURE__ */ __name((props) => {
  const { path, line } = import_vanjs_core33.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M13.73 21a2 2 0 0 1-3.46 0"
    }),
    path({
      d: "M18.63 13A17.89 17.89 0 0 1 18 8"
    }),
    path({
      d: "M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"
    }),
    path({
      d: "M18 8a6 6 0 0 0-9.33-5"
    }),
    line({
      x1: "1",
      y1: "1",
      x2: "23",
      y2: "23"
    })
  );
}, "BellOff");

// src/icons/Bluetooth.ts
var import_vanjs_core34 = __toESM(require("vanjs-core"), 1);
var Bluetooth = /* @__PURE__ */ __name((props) => {
  const { polyline } = import_vanjs_core34.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"
    })
  );
}, "Bluetooth");

// src/icons/Bold.ts
var import_vanjs_core35 = __toESM(require("vanjs-core"), 1);
var Bold = /* @__PURE__ */ __name((props) => {
  const { path } = import_vanjs_core35.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"
    }),
    path({
      d: "M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"
    })
  );
}, "Bold");

// src/icons/Book.ts
var import_vanjs_core36 = __toESM(require("vanjs-core"), 1);
var Book = /* @__PURE__ */ __name((props) => {
  const { path } = import_vanjs_core36.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
    }),
    path({
      d: "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
    })
  );
}, "Book");

// src/icons/BookOpen.ts
var import_vanjs_core37 = __toESM(require("vanjs-core"), 1);
var BookOpen = /* @__PURE__ */ __name((props) => {
  const { path } = import_vanjs_core37.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"
    }),
    path({
      d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"
    })
  );
}, "BookOpen");

// src/icons/Bookmark.ts
var import_vanjs_core38 = __toESM(require("vanjs-core"), 1);
var Bookmark = /* @__PURE__ */ __name((props) => {
  const { path } = import_vanjs_core38.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
    })
  );
}, "Bookmark");

// src/icons/Box.ts
var import_vanjs_core39 = __toESM(require("vanjs-core"), 1);
var Box = /* @__PURE__ */ __name((props) => {
  const { polyline, path, line } = import_vanjs_core39.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
    }),
    polyline({
      points: "3.27 6.96 12 12.01 20.73 6.96"
    }),
    line({
      x1: "12",
      y1: "22.08",
      x2: "12",
      y2: "12"
    })
  );
}, "Box");

// src/icons/Briefcase.ts
var import_vanjs_core40 = __toESM(require("vanjs-core"), 1);
var Briefcase = /* @__PURE__ */ __name((props) => {
  const { path, rect } = import_vanjs_core40.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "2",
      y: "7",
      width: "20",
      height: "14",
      rx: "2",
      ry: "2"
    }),
    path({
      d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
    })
  );
}, "Briefcase");

// src/icons/Calendar.ts
var import_vanjs_core41 = __toESM(require("vanjs-core"), 1);
var Calendar = /* @__PURE__ */ __name((props) => {
  const { line, rect } = import_vanjs_core41.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "3",
      y: "4",
      width: "18",
      height: "18",
      rx: "2",
      ry: "2"
    }),
    line({
      x1: "16",
      y1: "2",
      x2: "16",
      y2: "6"
    }),
    line({
      x1: "8",
      y1: "2",
      x2: "8",
      y2: "6"
    }),
    line({
      x1: "3",
      y1: "10",
      x2: "21",
      y2: "10"
    })
  );
}, "Calendar");

// src/icons/Camera.ts
var import_vanjs_core42 = __toESM(require("vanjs-core"), 1);
var Camera = /* @__PURE__ */ __name((props) => {
  const { path, circle } = import_vanjs_core42.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"
    }),
    circle({
      cx: "12",
      cy: "13",
      r: "4"
    })
  );
}, "Camera");

// src/icons/CameraOff.ts
var import_vanjs_core43 = __toESM(require("vanjs-core"), 1);
var CameraOff = /* @__PURE__ */ __name((props) => {
  const { path, line } = import_vanjs_core43.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "1",
      y1: "1",
      x2: "23",
      y2: "23"
    }),
    path({
      d: "M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"
    })
  );
}, "CameraOff");

// src/icons/Cast.ts
var import_vanjs_core44 = __toESM(require("vanjs-core"), 1);
var Cast = /* @__PURE__ */ __name((props) => {
  const { path, line } = import_vanjs_core44.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"
    }),
    line({
      x1: "2",
      y1: "20",
      x2: "2.01",
      y2: "20"
    })
  );
}, "Cast");

// src/icons/Check.ts
var import_vanjs_core45 = __toESM(require("vanjs-core"), 1);
var Check = /* @__PURE__ */ __name((props) => {
  const { polyline } = import_vanjs_core45.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "20 6 9 17 4 12"
    })
  );
}, "Check");

// src/icons/CheckCircle.ts
var import_vanjs_core46 = __toESM(require("vanjs-core"), 1);
var CheckCircle = /* @__PURE__ */ __name((props) => {
  const { polyline, path } = import_vanjs_core46.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
    }),
    polyline({
      points: "22 4 12 14.01 9 11.01"
    })
  );
}, "CheckCircle");

// src/icons/CheckSquare.ts
var import_vanjs_core47 = __toESM(require("vanjs-core"), 1);
var CheckSquare = /* @__PURE__ */ __name((props) => {
  const { polyline, path } = import_vanjs_core47.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "9 11 12 14 22 4"
    }),
    path({
      d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
    })
  );
}, "CheckSquare");

// src/icons/ChevronDown.ts
var import_vanjs_core48 = __toESM(require("vanjs-core"), 1);
var ChevronDown = /* @__PURE__ */ __name((props) => {
  const { polyline } = import_vanjs_core48.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "6 9 12 15 18 9"
    })
  );
}, "ChevronDown");

// src/icons/ChevronLeft.ts
var import_vanjs_core49 = __toESM(require("vanjs-core"), 1);
var ChevronLeft = /* @__PURE__ */ __name((props) => {
  const { polyline } = import_vanjs_core49.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "15 18 9 12 15 6"
    })
  );
}, "ChevronLeft");

// src/icons/ChevronRight.ts
var import_vanjs_core50 = __toESM(require("vanjs-core"), 1);
var ChevronRight = /* @__PURE__ */ __name((props) => {
  const { polyline } = import_vanjs_core50.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "9 18 15 12 9 6"
    })
  );
}, "ChevronRight");

// src/icons/ChevronUp.ts
var import_vanjs_core51 = __toESM(require("vanjs-core"), 1);
var ChevronUp = /* @__PURE__ */ __name((props) => {
  const { polyline } = import_vanjs_core51.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "18 15 12 9 6 15"
    })
  );
}, "ChevronUp");

// src/icons/ChevronsDown.ts
var import_vanjs_core52 = __toESM(require("vanjs-core"), 1);
var ChevronsDown = /* @__PURE__ */ __name((props) => {
  const { polyline } = import_vanjs_core52.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "7 13 12 18 17 13"
    }),
    polyline({
      points: "7 6 12 11 17 6"
    })
  );
}, "ChevronsDown");

// src/icons/ChevronsLeft.ts
var import_vanjs_core53 = __toESM(require("vanjs-core"), 1);
var ChevronsLeft = /* @__PURE__ */ __name((props) => {
  const { polyline } = import_vanjs_core53.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "11 17 6 12 11 7"
    }),
    polyline({
      points: "18 17 13 12 18 7"
    })
  );
}, "ChevronsLeft");

// src/icons/ChevronsRight.ts
var import_vanjs_core54 = __toESM(require("vanjs-core"), 1);
var ChevronsRight = /* @__PURE__ */ __name((props) => {
  const { polyline } = import_vanjs_core54.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "13 17 18 12 13 7"
    }),
    polyline({
      points: "6 17 11 12 6 7"
    })
  );
}, "ChevronsRight");

// src/icons/ChevronsUp.ts
var import_vanjs_core55 = __toESM(require("vanjs-core"), 1);
var ChevronsUp = /* @__PURE__ */ __name((props) => {
  const { polyline } = import_vanjs_core55.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "17 11 12 6 7 11"
    }),
    polyline({
      points: "17 18 12 13 7 18"
    })
  );
}, "ChevronsUp");

// src/icons/Chrome.ts
var import_vanjs_core56 = __toESM(require("vanjs-core"), 1);
var Chrome = /* @__PURE__ */ __name((props) => {
  const { circle, line } = import_vanjs_core56.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10"
    }),
    circle({
      cx: "12",
      cy: "12",
      r: "4"
    }),
    line({
      x1: "21.17",
      y1: "8",
      x2: "12",
      y2: "8"
    }),
    line({
      x1: "3.95",
      y1: "6.06",
      x2: "8.54",
      y2: "14"
    }),
    line({
      x1: "10.88",
      y1: "21.94",
      x2: "15.46",
      y2: "14"
    })
  );
}, "Chrome");

// src/icons/Circle.ts
var import_vanjs_core57 = __toESM(require("vanjs-core"), 1);
var Circle = /* @__PURE__ */ __name((props) => {
  const { circle } = import_vanjs_core57.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10"
    })
  );
}, "Circle");

// src/icons/Clipboard.ts
var import_vanjs_core58 = __toESM(require("vanjs-core"), 1);
var Clipboard = /* @__PURE__ */ __name((props) => {
  const { path, rect } = import_vanjs_core58.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
    }),
    rect({
      x: "8",
      y: "2",
      width: "8",
      height: "4",
      rx: "1",
      ry: "1"
    })
  );
}, "Clipboard");

// src/icons/Clock.ts
var import_vanjs_core59 = __toESM(require("vanjs-core"), 1);
var Clock = /* @__PURE__ */ __name((props) => {
  const { polyline, circle } = import_vanjs_core59.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10"
    }),
    polyline({
      points: "12 6 12 12 16 14"
    })
  );
}, "Clock");

// src/icons/Cloud.ts
var import_vanjs_core60 = __toESM(require("vanjs-core"), 1);
var Cloud = /* @__PURE__ */ __name((props) => {
  const { path } = import_vanjs_core60.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"
    })
  );
}, "Cloud");

// src/icons/CloudDrizzle.ts
var import_vanjs_core61 = __toESM(require("vanjs-core"), 1);
var CloudDrizzle = /* @__PURE__ */ __name((props) => {
  const { path, line } = import_vanjs_core61.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "8",
      y1: "19",
      x2: "8",
      y2: "21"
    }),
    line({
      x1: "8",
      y1: "13",
      x2: "8",
      y2: "15"
    }),
    line({
      x1: "16",
      y1: "19",
      x2: "16",
      y2: "21"
    }),
    line({
      x1: "16",
      y1: "13",
      x2: "16",
      y2: "15"
    }),
    line({
      x1: "12",
      y1: "21",
      x2: "12",
      y2: "23"
    }),
    line({
      x1: "12",
      y1: "15",
      x2: "12",
      y2: "17"
    }),
    path({
      d: "M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"
    })
  );
}, "CloudDrizzle");

// src/icons/CloudLightning.ts
var import_vanjs_core62 = __toESM(require("vanjs-core"), 1);
var CloudLightning = /* @__PURE__ */ __name((props) => {
  const { polyline, path } = import_vanjs_core62.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"
    }),
    polyline({
      points: "13 11 9 17 15 17 11 23"
    })
  );
}, "CloudLightning");

// src/icons/CloudOff.ts
var import_vanjs_core63 = __toESM(require("vanjs-core"), 1);
var CloudOff = /* @__PURE__ */ __name((props) => {
  const { path, line } = import_vanjs_core63.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"
    }),
    line({
      x1: "1",
      y1: "1",
      x2: "23",
      y2: "23"
    })
  );
}, "CloudOff");

// src/icons/CloudRain.ts
var import_vanjs_core64 = __toESM(require("vanjs-core"), 1);
var CloudRain = /* @__PURE__ */ __name((props) => {
  const { path, line } = import_vanjs_core64.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "16",
      y1: "13",
      x2: "16",
      y2: "21"
    }),
    line({
      x1: "8",
      y1: "13",
      x2: "8",
      y2: "21"
    }),
    line({
      x1: "12",
      y1: "15",
      x2: "12",
      y2: "23"
    }),
    path({
      d: "M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"
    })
  );
}, "CloudRain");

// src/icons/CloudSnow.ts
var import_vanjs_core65 = __toESM(require("vanjs-core"), 1);
var CloudSnow = /* @__PURE__ */ __name((props) => {
  const { path, line } = import_vanjs_core65.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"
    }),
    line({
      x1: "8",
      y1: "16",
      x2: "8.01",
      y2: "16"
    }),
    line({
      x1: "8",
      y1: "20",
      x2: "8.01",
      y2: "20"
    }),
    line({
      x1: "12",
      y1: "18",
      x2: "12.01",
      y2: "18"
    }),
    line({
      x1: "12",
      y1: "22",
      x2: "12.01",
      y2: "22"
    }),
    line({
      x1: "16",
      y1: "16",
      x2: "16.01",
      y2: "16"
    }),
    line({
      x1: "16",
      y1: "20",
      x2: "16.01",
      y2: "20"
    })
  );
}, "CloudSnow");

// src/icons/Code.ts
var import_vanjs_core66 = __toESM(require("vanjs-core"), 1);
var Code = /* @__PURE__ */ __name((props) => {
  const { polyline } = import_vanjs_core66.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "16 18 22 12 16 6"
    }),
    polyline({
      points: "8 6 2 12 8 18"
    })
  );
}, "Code");

// src/icons/Codepen.ts
var import_vanjs_core67 = __toESM(require("vanjs-core"), 1);
var Codepen = /* @__PURE__ */ __name((props) => {
  const { polyline, polygon, line } = import_vanjs_core67.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    polygon({
      points: "12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"
    }),
    line({
      x1: "12",
      y1: "22",
      x2: "12",
      y2: "15.5"
    }),
    polyline({
      points: "22 8.5 12 15.5 2 8.5"
    }),
    polyline({
      points: "2 15.5 12 8.5 22 15.5"
    }),
    line({
      x1: "12",
      y1: "2",
      x2: "12",
      y2: "8.5"
    })
  );
}, "Codepen");

// src/icons/Codesandbox.ts
var import_vanjs_core68 = __toESM(require("vanjs-core"), 1);
var Codesandbox = /* @__PURE__ */ __name((props) => {
  const { polyline, path, line } = import_vanjs_core68.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
    }),
    polyline({
      points: "7.5 4.21 12 6.81 16.5 4.21"
    }),
    polyline({
      points: "7.5 19.79 7.5 14.6 3 12"
    }),
    polyline({
      points: "21 12 16.5 14.6 16.5 19.79"
    }),
    polyline({
      points: "3.27 6.96 12 12.01 20.73 6.96"
    }),
    line({
      x1: "12",
      y1: "22.08",
      x2: "12",
      y2: "12"
    })
  );
}, "Codesandbox");

// src/icons/Coffee.ts
var import_vanjs_core69 = __toESM(require("vanjs-core"), 1);
var Coffee = /* @__PURE__ */ __name((props) => {
  const { path, line } = import_vanjs_core69.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M18 8h1a4 4 0 0 1 0 8h-1"
    }),
    path({
      d: "M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"
    }),
    line({
      x1: "6",
      y1: "1",
      x2: "6",
      y2: "4"
    }),
    line({
      x1: "10",
      y1: "1",
      x2: "10",
      y2: "4"
    }),
    line({
      x1: "14",
      y1: "1",
      x2: "14",
      y2: "4"
    })
  );
}, "Coffee");

// src/icons/Columns.ts
var import_vanjs_core70 = __toESM(require("vanjs-core"), 1);
var Columns = /* @__PURE__ */ __name((props) => {
  const { path } = import_vanjs_core70.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"
    })
  );
}, "Columns");

// src/icons/Command.ts
var import_vanjs_core71 = __toESM(require("vanjs-core"), 1);
var Command = /* @__PURE__ */ __name((props) => {
  const { path } = import_vanjs_core71.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"
    })
  );
}, "Command");

// src/icons/Compass.ts
var import_vanjs_core72 = __toESM(require("vanjs-core"), 1);
var Compass = /* @__PURE__ */ __name((props) => {
  const { polygon, circle } = import_vanjs_core72.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10"
    }),
    polygon({
      points: "16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"
    })
  );
}, "Compass");

// src/icons/Copy.ts
var import_vanjs_core73 = __toESM(require("vanjs-core"), 1);
var Copy = /* @__PURE__ */ __name((props) => {
  const { path, rect } = import_vanjs_core73.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "9",
      y: "9",
      width: "13",
      height: "13",
      rx: "2",
      ry: "2"
    }),
    path({
      d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
    })
  );
}, "Copy");

// src/icons/CornerDownLeft.ts
var import_vanjs_core74 = __toESM(require("vanjs-core"), 1);
var CornerDownLeft = /* @__PURE__ */ __name((props) => {
  const { polyline, path } = import_vanjs_core74.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "9 10 4 15 9 20"
    }),
    path({
      d: "M20 4v7a4 4 0 0 1-4 4H4"
    })
  );
}, "CornerDownLeft");

// src/icons/CornerDownRight.ts
var import_vanjs_core75 = __toESM(require("vanjs-core"), 1);
var CornerDownRight = /* @__PURE__ */ __name((props) => {
  const { polyline, path } = import_vanjs_core75.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "15 10 20 15 15 20"
    }),
    path({
      d: "M4 4v7a4 4 0 0 0 4 4h12"
    })
  );
}, "CornerDownRight");

// src/icons/CornerLeftDown.ts
var import_vanjs_core76 = __toESM(require("vanjs-core"), 1);
var CornerLeftDown = /* @__PURE__ */ __name((props) => {
  const { polyline, path } = import_vanjs_core76.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "14 15 9 20 4 15"
    }),
    path({
      d: "M20 4h-7a4 4 0 0 0-4 4v12"
    })
  );
}, "CornerLeftDown");

// src/icons/CornerLeftUp.ts
var import_vanjs_core77 = __toESM(require("vanjs-core"), 1);
var CornerLeftUp = /* @__PURE__ */ __name((props) => {
  const { polyline, path } = import_vanjs_core77.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "14 9 9 4 4 9"
    }),
    path({
      d: "M20 20h-7a4 4 0 0 1-4-4V4"
    })
  );
}, "CornerLeftUp");

// src/icons/CornerRightDown.ts
var import_vanjs_core78 = __toESM(require("vanjs-core"), 1);
var CornerRightDown = /* @__PURE__ */ __name((props) => {
  const { polyline, path } = import_vanjs_core78.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "10 15 15 20 20 15"
    }),
    path({
      d: "M4 4h7a4 4 0 0 1 4 4v12"
    })
  );
}, "CornerRightDown");

// src/icons/CornerRightUp.ts
var import_vanjs_core79 = __toESM(require("vanjs-core"), 1);
var CornerRightUp = /* @__PURE__ */ __name((props) => {
  const { polyline, path } = import_vanjs_core79.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "10 9 15 4 20 9"
    }),
    path({
      d: "M4 20h7a4 4 0 0 0 4-4V4"
    })
  );
}, "CornerRightUp");

// src/icons/CornerUpLeft.ts
var import_vanjs_core80 = __toESM(require("vanjs-core"), 1);
var CornerUpLeft = /* @__PURE__ */ __name((props) => {
  const { polyline, path } = import_vanjs_core80.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "9 14 4 9 9 4"
    }),
    path({
      d: "M20 20v-7a4 4 0 0 0-4-4H4"
    })
  );
}, "CornerUpLeft");

// src/icons/CornerUpRight.ts
var import_vanjs_core81 = __toESM(require("vanjs-core"), 1);
var CornerUpRight = /* @__PURE__ */ __name((props) => {
  const { polyline, path } = import_vanjs_core81.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "15 14 20 9 15 4"
    }),
    path({
      d: "M4 20v-7a4 4 0 0 1 4-4h12"
    })
  );
}, "CornerUpRight");

// src/icons/Cpu.ts
var import_vanjs_core82 = __toESM(require("vanjs-core"), 1);
var Cpu = /* @__PURE__ */ __name((props) => {
  const { line, rect } = import_vanjs_core82.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "4",
      y: "4",
      width: "16",
      height: "16",
      rx: "2",
      ry: "2"
    }),
    rect({
      x: "9",
      y: "9",
      width: "6",
      height: "6"
    }),
    line({
      x1: "9",
      y1: "1",
      x2: "9",
      y2: "4"
    }),
    line({
      x1: "15",
      y1: "1",
      x2: "15",
      y2: "4"
    }),
    line({
      x1: "9",
      y1: "20",
      x2: "9",
      y2: "23"
    }),
    line({
      x1: "15",
      y1: "20",
      x2: "15",
      y2: "23"
    }),
    line({
      x1: "20",
      y1: "9",
      x2: "23",
      y2: "9"
    }),
    line({
      x1: "20",
      y1: "14",
      x2: "23",
      y2: "14"
    }),
    line({
      x1: "1",
      y1: "9",
      x2: "4",
      y2: "9"
    }),
    line({
      x1: "1",
      y1: "14",
      x2: "4",
      y2: "14"
    })
  );
}, "Cpu");

// src/icons/CreditCard.ts
var import_vanjs_core83 = __toESM(require("vanjs-core"), 1);
var CreditCard = /* @__PURE__ */ __name((props) => {
  const { line, rect } = import_vanjs_core83.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "1",
      y: "4",
      width: "22",
      height: "16",
      rx: "2",
      ry: "2"
    }),
    line({
      x1: "1",
      y1: "10",
      x2: "23",
      y2: "10"
    })
  );
}, "CreditCard");

// src/icons/Crop.ts
var import_vanjs_core84 = __toESM(require("vanjs-core"), 1);
var Crop = /* @__PURE__ */ __name((props) => {
  const { path } = import_vanjs_core84.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M6.13 1L6 16a2 2 0 0 0 2 2h15"
    }),
    path({
      d: "M1 6.13L16 6a2 2 0 0 1 2 2v15"
    })
  );
}, "Crop");

// src/icons/Crosshair.ts
var import_vanjs_core85 = __toESM(require("vanjs-core"), 1);
var Crosshair = /* @__PURE__ */ __name((props) => {
  const { circle, line } = import_vanjs_core85.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10"
    }),
    line({
      x1: "22",
      y1: "12",
      x2: "18",
      y2: "12"
    }),
    line({
      x1: "6",
      y1: "12",
      x2: "2",
      y2: "12"
    }),
    line({
      x1: "12",
      y1: "6",
      x2: "12",
      y2: "2"
    }),
    line({
      x1: "12",
      y1: "22",
      x2: "12",
      y2: "18"
    })
  );
}, "Crosshair");

// src/icons/Database.ts
var import_vanjs_core86 = __toESM(require("vanjs-core"), 1);
var Database = /* @__PURE__ */ __name((props) => {
  const { path, ellipse } = import_vanjs_core86.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    ellipse({
      cx: "12",
      cy: "5",
      rx: "9",
      ry: "3"
    }),
    path({
      d: "M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"
    }),
    path({
      d: "M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"
    })
  );
}, "Database");

// src/icons/Delete.ts
var import_vanjs_core87 = __toESM(require("vanjs-core"), 1);
var Delete = /* @__PURE__ */ __name((props) => {
  const { path, line } = import_vanjs_core87.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"
    }),
    line({
      x1: "18",
      y1: "9",
      x2: "12",
      y2: "15"
    }),
    line({
      x1: "12",
      y1: "9",
      x2: "18",
      y2: "15"
    })
  );
}, "Delete");

// src/icons/Disc.ts
var import_vanjs_core88 = __toESM(require("vanjs-core"), 1);
var Disc = /* @__PURE__ */ __name((props) => {
  const { circle } = import_vanjs_core88.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10"
    }),
    circle({
      cx: "12",
      cy: "12",
      r: "3"
    })
  );
}, "Disc");

// src/icons/Divide.ts
var import_vanjs_core89 = __toESM(require("vanjs-core"), 1);
var Divide = /* @__PURE__ */ __name((props) => {
  const { circle, line } = import_vanjs_core89.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "6",
      r: "2"
    }),
    line({
      x1: "5",
      y1: "12",
      x2: "19",
      y2: "12"
    }),
    circle({
      cx: "12",
      cy: "18",
      r: "2"
    })
  );
}, "Divide");

// src/icons/DivideCircle.ts
var import_vanjs_core90 = __toESM(require("vanjs-core"), 1);
var DivideCircle = /* @__PURE__ */ __name((props) => {
  const { circle, line } = import_vanjs_core90.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "8",
      y1: "12",
      x2: "16",
      y2: "12"
    }),
    line({
      x1: "12",
      y1: "16",
      x2: "12",
      y2: "16"
    }),
    line({
      x1: "12",
      y1: "8",
      x2: "12",
      y2: "8"
    }),
    circle({
      cx: "12",
      cy: "12",
      r: "10"
    })
  );
}, "DivideCircle");

// src/icons/DivideSquare.ts
var import_vanjs_core91 = __toESM(require("vanjs-core"), 1);
var DivideSquare = /* @__PURE__ */ __name((props) => {
  const { line, rect } = import_vanjs_core91.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "2",
      ry: "2"
    }),
    line({
      x1: "8",
      y1: "12",
      x2: "16",
      y2: "12"
    }),
    line({
      x1: "12",
      y1: "16",
      x2: "12",
      y2: "16"
    }),
    line({
      x1: "12",
      y1: "8",
      x2: "12",
      y2: "8"
    })
  );
}, "DivideSquare");

// src/icons/DollarSign.ts
var import_vanjs_core92 = __toESM(require("vanjs-core"), 1);
var DollarSign = /* @__PURE__ */ __name((props) => {
  const { path, line } = import_vanjs_core92.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "12",
      y1: "1",
      x2: "12",
      y2: "23"
    }),
    path({
      d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
    })
  );
}, "DollarSign");

// src/icons/Download.ts
var import_vanjs_core93 = __toESM(require("vanjs-core"), 1);
var Download = /* @__PURE__ */ __name((props) => {
  const { polyline, path, line } = import_vanjs_core93.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
    }),
    polyline({
      points: "7 10 12 15 17 10"
    }),
    line({
      x1: "12",
      y1: "15",
      x2: "12",
      y2: "3"
    })
  );
}, "Download");

// src/icons/DownloadCloud.ts
var import_vanjs_core94 = __toESM(require("vanjs-core"), 1);
var DownloadCloud = /* @__PURE__ */ __name((props) => {
  const { polyline, path, line } = import_vanjs_core94.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "8 17 12 21 16 17"
    }),
    line({
      x1: "12",
      y1: "12",
      x2: "12",
      y2: "21"
    }),
    path({
      d: "M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"
    })
  );
}, "DownloadCloud");

// src/icons/Dribbble.ts
var import_vanjs_core95 = __toESM(require("vanjs-core"), 1);
var Dribbble = /* @__PURE__ */ __name((props) => {
  const { path, circle } = import_vanjs_core95.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10"
    }),
    path({
      d: "M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"
    })
  );
}, "Dribbble");

// src/icons/Droplet.ts
var import_vanjs_core96 = __toESM(require("vanjs-core"), 1);
var Droplet = /* @__PURE__ */ __name((props) => {
  const { path } = import_vanjs_core96.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"
    })
  );
}, "Droplet");

// src/icons/Edit.ts
var import_vanjs_core97 = __toESM(require("vanjs-core"), 1);
var Edit = /* @__PURE__ */ __name((props) => {
  const { path } = import_vanjs_core97.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
    }),
    path({
      d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
    })
  );
}, "Edit");

// src/icons/Edit2.ts
var import_vanjs_core98 = __toESM(require("vanjs-core"), 1);
var Edit2 = /* @__PURE__ */ __name((props) => {
  const { path } = import_vanjs_core98.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"
    })
  );
}, "Edit2");

// src/icons/Edit3.ts
var import_vanjs_core99 = __toESM(require("vanjs-core"), 1);
var Edit3 = /* @__PURE__ */ __name((props) => {
  const { path } = import_vanjs_core99.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M12 20h9"
    }),
    path({
      d: "M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
    })
  );
}, "Edit3");

// src/icons/ExternalLink.ts
var import_vanjs_core100 = __toESM(require("vanjs-core"), 1);
var ExternalLink = /* @__PURE__ */ __name((props) => {
  const { polyline, path, line } = import_vanjs_core100.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
    }),
    polyline({
      points: "15 3 21 3 21 9"
    }),
    line({
      x1: "10",
      y1: "14",
      x2: "21",
      y2: "3"
    })
  );
}, "ExternalLink");

// src/icons/Eye.ts
var import_vanjs_core101 = __toESM(require("vanjs-core"), 1);
var Eye = /* @__PURE__ */ __name((props) => {
  const { path, circle } = import_vanjs_core101.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
    }),
    circle({
      cx: "12",
      cy: "12",
      r: "3"
    })
  );
}, "Eye");

// src/icons/EyeOff.ts
var import_vanjs_core102 = __toESM(require("vanjs-core"), 1);
var EyeOff = /* @__PURE__ */ __name((props) => {
  const { path, line } = import_vanjs_core102.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"
    }),
    line({
      x1: "1",
      y1: "1",
      x2: "23",
      y2: "23"
    })
  );
}, "EyeOff");

// src/icons/Facebook.ts
var import_vanjs_core103 = __toESM(require("vanjs-core"), 1);
var Facebook = /* @__PURE__ */ __name((props) => {
  const { path } = import_vanjs_core103.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
    })
  );
}, "Facebook");

// src/icons/FastForward.ts
var import_vanjs_core104 = __toESM(require("vanjs-core"), 1);
var FastForward = /* @__PURE__ */ __name((props) => {
  const { polygon } = import_vanjs_core104.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    polygon({
      points: "13 19 22 12 13 5 13 19"
    }),
    polygon({
      points: "2 19 11 12 2 5 2 19"
    })
  );
}, "FastForward");

// src/icons/Feather.ts
var import_vanjs_core105 = __toESM(require("vanjs-core"), 1);
var Feather = /* @__PURE__ */ __name((props) => {
  const { path, line } = import_vanjs_core105.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"
    }),
    line({
      x1: "16",
      y1: "8",
      x2: "2",
      y2: "22"
    }),
    line({
      x1: "17.5",
      y1: "15",
      x2: "9",
      y2: "15"
    })
  );
}, "Feather");

// src/icons/Figma.ts
var import_vanjs_core106 = __toESM(require("vanjs-core"), 1);
var Figma = /* @__PURE__ */ __name((props) => {
  const { path } = import_vanjs_core106.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"
    }),
    path({
      d: "M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"
    }),
    path({
      d: "M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"
    }),
    path({
      d: "M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"
    }),
    path({
      d: "M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"
    })
  );
}, "Figma");

// src/icons/File.ts
var import_vanjs_core107 = __toESM(require("vanjs-core"), 1);
var File = /* @__PURE__ */ __name((props) => {
  const { polyline, path } = import_vanjs_core107.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"
    }),
    polyline({
      points: "13 2 13 9 20 9"
    })
  );
}, "File");

// src/icons/FileMinus.ts
var import_vanjs_core108 = __toESM(require("vanjs-core"), 1);
var FileMinus = /* @__PURE__ */ __name((props) => {
  const { polyline, path, line } = import_vanjs_core108.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
    }),
    polyline({
      points: "14 2 14 8 20 8"
    }),
    line({
      x1: "9",
      y1: "15",
      x2: "15",
      y2: "15"
    })
  );
}, "FileMinus");

// src/icons/FilePlus.ts
var import_vanjs_core109 = __toESM(require("vanjs-core"), 1);
var FilePlus = /* @__PURE__ */ __name((props) => {
  const { polyline, path, line } = import_vanjs_core109.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
    }),
    polyline({
      points: "14 2 14 8 20 8"
    }),
    line({
      x1: "12",
      y1: "18",
      x2: "12",
      y2: "12"
    }),
    line({
      x1: "9",
      y1: "15",
      x2: "15",
      y2: "15"
    })
  );
}, "FilePlus");

// src/icons/FileText.ts
var import_vanjs_core110 = __toESM(require("vanjs-core"), 1);
var FileText = /* @__PURE__ */ __name((props) => {
  const { polyline, path, line } = import_vanjs_core110.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
    }),
    polyline({
      points: "14 2 14 8 20 8"
    }),
    line({
      x1: "16",
      y1: "13",
      x2: "8",
      y2: "13"
    }),
    line({
      x1: "16",
      y1: "17",
      x2: "8",
      y2: "17"
    }),
    polyline({
      points: "10 9 9 9 8 9"
    })
  );
}, "FileText");

// src/icons/Film.ts
var import_vanjs_core111 = __toESM(require("vanjs-core"), 1);
var Film = /* @__PURE__ */ __name((props) => {
  const { line, rect } = import_vanjs_core111.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "2",
      y: "2",
      width: "20",
      height: "20",
      rx: "2.18",
      ry: "2.18"
    }),
    line({
      x1: "7",
      y1: "2",
      x2: "7",
      y2: "22"
    }),
    line({
      x1: "17",
      y1: "2",
      x2: "17",
      y2: "22"
    }),
    line({
      x1: "2",
      y1: "12",
      x2: "22",
      y2: "12"
    }),
    line({
      x1: "2",
      y1: "7",
      x2: "7",
      y2: "7"
    }),
    line({
      x1: "2",
      y1: "17",
      x2: "7",
      y2: "17"
    }),
    line({
      x1: "17",
      y1: "17",
      x2: "22",
      y2: "17"
    }),
    line({
      x1: "17",
      y1: "7",
      x2: "22",
      y2: "7"
    })
  );
}, "Film");

// src/icons/Filter.ts
var import_vanjs_core112 = __toESM(require("vanjs-core"), 1);
var Filter = /* @__PURE__ */ __name((props) => {
  const { polygon } = import_vanjs_core112.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    polygon({
      points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"
    })
  );
}, "Filter");

// src/icons/Flag.ts
var import_vanjs_core113 = __toESM(require("vanjs-core"), 1);
var Flag = /* @__PURE__ */ __name((props) => {
  const { path, line } = import_vanjs_core113.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"
    }),
    line({
      x1: "4",
      y1: "22",
      x2: "4",
      y2: "15"
    })
  );
}, "Flag");

// src/icons/Folder.ts
var import_vanjs_core114 = __toESM(require("vanjs-core"), 1);
var Folder = /* @__PURE__ */ __name((props) => {
  const { path } = import_vanjs_core114.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
    })
  );
}, "Folder");

// src/icons/FolderMinus.ts
var import_vanjs_core115 = __toESM(require("vanjs-core"), 1);
var FolderMinus = /* @__PURE__ */ __name((props) => {
  const { path, line } = import_vanjs_core115.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
    }),
    line({
      x1: "9",
      y1: "14",
      x2: "15",
      y2: "14"
    })
  );
}, "FolderMinus");

// src/icons/FolderPlus.ts
var import_vanjs_core116 = __toESM(require("vanjs-core"), 1);
var FolderPlus = /* @__PURE__ */ __name((props) => {
  const { path, line } = import_vanjs_core116.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
    }),
    line({
      x1: "12",
      y1: "11",
      x2: "12",
      y2: "17"
    }),
    line({
      x1: "9",
      y1: "14",
      x2: "15",
      y2: "14"
    })
  );
}, "FolderPlus");

// src/icons/Framer.ts
var import_vanjs_core117 = __toESM(require("vanjs-core"), 1);
var Framer = /* @__PURE__ */ __name((props) => {
  const { path } = import_vanjs_core117.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"
    })
  );
}, "Framer");

// src/icons/Frown.ts
var import_vanjs_core118 = __toESM(require("vanjs-core"), 1);
var Frown = /* @__PURE__ */ __name((props) => {
  const { path, circle, line } = import_vanjs_core118.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10"
    }),
    path({
      d: "M16 16s-1.5-2-4-2-4 2-4 2"
    }),
    line({
      x1: "9",
      y1: "9",
      x2: "9.01",
      y2: "9"
    }),
    line({
      x1: "15",
      y1: "9",
      x2: "15.01",
      y2: "9"
    })
  );
}, "Frown");

// src/icons/Gift.ts
var import_vanjs_core119 = __toESM(require("vanjs-core"), 1);
var Gift = /* @__PURE__ */ __name((props) => {
  const { polyline, path, line, rect } = import_vanjs_core119.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "20 12 20 22 4 22 4 12"
    }),
    rect({
      x: "2",
      y: "7",
      width: "20",
      height: "5"
    }),
    line({
      x1: "12",
      y1: "22",
      x2: "12",
      y2: "7"
    }),
    path({
      d: "M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"
    }),
    path({
      d: "M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"
    })
  );
}, "Gift");

// src/icons/GitBranch.ts
var import_vanjs_core120 = __toESM(require("vanjs-core"), 1);
var GitBranch = /* @__PURE__ */ __name((props) => {
  const { path, circle, line } = import_vanjs_core120.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "6",
      y1: "3",
      x2: "6",
      y2: "15"
    }),
    circle({
      cx: "18",
      cy: "6",
      r: "3"
    }),
    circle({
      cx: "6",
      cy: "18",
      r: "3"
    }),
    path({
      d: "M18 9a9 9 0 0 1-9 9"
    })
  );
}, "GitBranch");

// src/icons/GitCommit.ts
var import_vanjs_core121 = __toESM(require("vanjs-core"), 1);
var GitCommit = /* @__PURE__ */ __name((props) => {
  const { circle, line } = import_vanjs_core121.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "4"
    }),
    line({
      x1: "1.05",
      y1: "12",
      x2: "7",
      y2: "12"
    }),
    line({
      x1: "17.01",
      y1: "12",
      x2: "22.96",
      y2: "12"
    })
  );
}, "GitCommit");

// src/icons/GitMerge.ts
var import_vanjs_core122 = __toESM(require("vanjs-core"), 1);
var GitMerge = /* @__PURE__ */ __name((props) => {
  const { path, circle } = import_vanjs_core122.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "18",
      cy: "18",
      r: "3"
    }),
    circle({
      cx: "6",
      cy: "6",
      r: "3"
    }),
    path({
      d: "M6 21V9a9 9 0 0 0 9 9"
    })
  );
}, "GitMerge");

// src/icons/GitPullRequest.ts
var import_vanjs_core123 = __toESM(require("vanjs-core"), 1);
var GitPullRequest = /* @__PURE__ */ __name((props) => {
  const { path, circle, line } = import_vanjs_core123.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "18",
      cy: "18",
      r: "3"
    }),
    circle({
      cx: "6",
      cy: "6",
      r: "3"
    }),
    path({
      d: "M13 6h3a2 2 0 0 1 2 2v7"
    }),
    line({
      x1: "6",
      y1: "9",
      x2: "6",
      y2: "21"
    })
  );
}, "GitPullRequest");

// src/icons/Github.ts
var import_vanjs_core124 = __toESM(require("vanjs-core"), 1);
var Github = /* @__PURE__ */ __name((props) => {
  const { path } = import_vanjs_core124.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
    })
  );
}, "Github");

// src/icons/Gitlab.ts
var import_vanjs_core125 = __toESM(require("vanjs-core"), 1);
var Gitlab = /* @__PURE__ */ __name((props) => {
  const { path } = import_vanjs_core125.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"
    })
  );
}, "Gitlab");

// src/icons/Globe.ts
var import_vanjs_core126 = __toESM(require("vanjs-core"), 1);
var Globe = /* @__PURE__ */ __name((props) => {
  const { path, circle, line } = import_vanjs_core126.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10"
    }),
    line({
      x1: "2",
      y1: "12",
      x2: "22",
      y2: "12"
    }),
    path({
      d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
    })
  );
}, "Globe");

// src/icons/Grid.ts
var import_vanjs_core127 = __toESM(require("vanjs-core"), 1);
var Grid = /* @__PURE__ */ __name((props) => {
  const { rect } = import_vanjs_core127.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "3",
      y: "3",
      width: "7",
      height: "7"
    }),
    rect({
      x: "14",
      y: "3",
      width: "7",
      height: "7"
    }),
    rect({
      x: "14",
      y: "14",
      width: "7",
      height: "7"
    }),
    rect({
      x: "3",
      y: "14",
      width: "7",
      height: "7"
    })
  );
}, "Grid");

// src/icons/HardDrive.ts
var import_vanjs_core128 = __toESM(require("vanjs-core"), 1);
var HardDrive = /* @__PURE__ */ __name((props) => {
  const { path, line } = import_vanjs_core128.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "22",
      y1: "12",
      x2: "2",
      y2: "12"
    }),
    path({
      d: "M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
    }),
    line({
      x1: "6",
      y1: "16",
      x2: "6.01",
      y2: "16"
    }),
    line({
      x1: "10",
      y1: "16",
      x2: "10.01",
      y2: "16"
    })
  );
}, "HardDrive");

// src/icons/Hash.ts
var import_vanjs_core129 = __toESM(require("vanjs-core"), 1);
var Hash = /* @__PURE__ */ __name((props) => {
  const { line } = import_vanjs_core129.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "4",
      y1: "9",
      x2: "20",
      y2: "9"
    }),
    line({
      x1: "4",
      y1: "15",
      x2: "20",
      y2: "15"
    }),
    line({
      x1: "10",
      y1: "3",
      x2: "8",
      y2: "21"
    }),
    line({
      x1: "16",
      y1: "3",
      x2: "14",
      y2: "21"
    })
  );
}, "Hash");

// src/icons/Headphones.ts
var import_vanjs_core130 = __toESM(require("vanjs-core"), 1);
var Headphones = /* @__PURE__ */ __name((props) => {
  const { path } = import_vanjs_core130.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M3 18v-6a9 9 0 0 1 18 0v6"
    }),
    path({
      d: "M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"
    })
  );
}, "Headphones");

// src/icons/Heart.ts
var import_vanjs_core131 = __toESM(require("vanjs-core"), 1);
var Heart = /* @__PURE__ */ __name((props) => {
  const { path } = import_vanjs_core131.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
    })
  );
}, "Heart");

// src/icons/HelpCircle.ts
var import_vanjs_core132 = __toESM(require("vanjs-core"), 1);
var HelpCircle = /* @__PURE__ */ __name((props) => {
  const { path, circle, line } = import_vanjs_core132.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10"
    }),
    path({
      d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
    }),
    line({
      x1: "12",
      y1: "17",
      x2: "12.01",
      y2: "17"
    })
  );
}, "HelpCircle");

// src/icons/Hexagon.ts
var import_vanjs_core133 = __toESM(require("vanjs-core"), 1);
var Hexagon = /* @__PURE__ */ __name((props) => {
  const { path } = import_vanjs_core133.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
    })
  );
}, "Hexagon");

// src/icons/Home.ts
var import_vanjs_core134 = __toESM(require("vanjs-core"), 1);
var Home = /* @__PURE__ */ __name((props) => {
  const { polyline, path } = import_vanjs_core134.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
    }),
    polyline({
      points: "9 22 9 12 15 12 15 22"
    })
  );
}, "Home");

// src/icons/Image.ts
var import_vanjs_core135 = __toESM(require("vanjs-core"), 1);
var Image = /* @__PURE__ */ __name((props) => {
  const { polyline, circle, rect } = import_vanjs_core135.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "2",
      ry: "2"
    }),
    circle({
      cx: "8.5",
      cy: "8.5",
      r: "1.5"
    }),
    polyline({
      points: "21 15 16 10 5 21"
    })
  );
}, "Image");

// src/icons/Inbox.ts
var import_vanjs_core136 = __toESM(require("vanjs-core"), 1);
var Inbox = /* @__PURE__ */ __name((props) => {
  const { polyline, path } = import_vanjs_core136.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "22 12 16 12 14 15 10 15 8 12 2 12"
    }),
    path({
      d: "M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
    })
  );
}, "Inbox");

// src/icons/Info.ts
var import_vanjs_core137 = __toESM(require("vanjs-core"), 1);
var Info = /* @__PURE__ */ __name((props) => {
  const { circle, line } = import_vanjs_core137.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10"
    }),
    line({
      x1: "12",
      y1: "16",
      x2: "12",
      y2: "12"
    }),
    line({
      x1: "12",
      y1: "8",
      x2: "12.01",
      y2: "8"
    })
  );
}, "Info");

// src/icons/Instagram.ts
var import_vanjs_core138 = __toESM(require("vanjs-core"), 1);
var Instagram = /* @__PURE__ */ __name((props) => {
  const { path, line, rect } = import_vanjs_core138.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "2",
      y: "2",
      width: "20",
      height: "20",
      rx: "5",
      ry: "5"
    }),
    path({
      d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
    }),
    line({
      x1: "17.5",
      y1: "6.5",
      x2: "17.51",
      y2: "6.5"
    })
  );
}, "Instagram");

// src/icons/Italic.ts
var import_vanjs_core139 = __toESM(require("vanjs-core"), 1);
var Italic = /* @__PURE__ */ __name((props) => {
  const { line } = import_vanjs_core139.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "19",
      y1: "4",
      x2: "10",
      y2: "4"
    }),
    line({
      x1: "14",
      y1: "20",
      x2: "5",
      y2: "20"
    }),
    line({
      x1: "15",
      y1: "4",
      x2: "9",
      y2: "20"
    })
  );
}, "Italic");

// src/icons/Key.ts
var import_vanjs_core140 = __toESM(require("vanjs-core"), 1);
var Key = /* @__PURE__ */ __name((props) => {
  const { path } = import_vanjs_core140.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"
    })
  );
}, "Key");

// src/icons/Layers.ts
var import_vanjs_core141 = __toESM(require("vanjs-core"), 1);
var Layers = /* @__PURE__ */ __name((props) => {
  const { polyline, polygon } = import_vanjs_core141.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    polygon({
      points: "12 2 2 7 12 12 22 7 12 2"
    }),
    polyline({
      points: "2 17 12 22 22 17"
    }),
    polyline({
      points: "2 12 12 17 22 12"
    })
  );
}, "Layers");

// src/icons/Layout.ts
var import_vanjs_core142 = __toESM(require("vanjs-core"), 1);
var Layout = /* @__PURE__ */ __name((props) => {
  const { line, rect } = import_vanjs_core142.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "2",
      ry: "2"
    }),
    line({
      x1: "3",
      y1: "9",
      x2: "21",
      y2: "9"
    }),
    line({
      x1: "9",
      y1: "21",
      x2: "9",
      y2: "9"
    })
  );
}, "Layout");

// src/icons/LifeBuoy.ts
var import_vanjs_core143 = __toESM(require("vanjs-core"), 1);
var LifeBuoy = /* @__PURE__ */ __name((props) => {
  const { circle, line } = import_vanjs_core143.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10"
    }),
    circle({
      cx: "12",
      cy: "12",
      r: "4"
    }),
    line({
      x1: "4.93",
      y1: "4.93",
      x2: "9.17",
      y2: "9.17"
    }),
    line({
      x1: "14.83",
      y1: "14.83",
      x2: "19.07",
      y2: "19.07"
    }),
    line({
      x1: "14.83",
      y1: "9.17",
      x2: "19.07",
      y2: "4.93"
    }),
    line({
      x1: "14.83",
      y1: "9.17",
      x2: "18.36",
      y2: "5.64"
    }),
    line({
      x1: "4.93",
      y1: "19.07",
      x2: "9.17",
      y2: "14.83"
    })
  );
}, "LifeBuoy");

// src/icons/Link.ts
var import_vanjs_core144 = __toESM(require("vanjs-core"), 1);
var Link = /* @__PURE__ */ __name((props) => {
  const { path } = import_vanjs_core144.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
    }),
    path({
      d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
    })
  );
}, "Link");

// src/icons/Link2.ts
var import_vanjs_core145 = __toESM(require("vanjs-core"), 1);
var Link2 = /* @__PURE__ */ __name((props) => {
  const { path, line } = import_vanjs_core145.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"
    }),
    line({
      x1: "8",
      y1: "12",
      x2: "16",
      y2: "12"
    })
  );
}, "Link2");

// src/icons/Linkedin.ts
var import_vanjs_core146 = __toESM(require("vanjs-core"), 1);
var Linkedin = /* @__PURE__ */ __name((props) => {
  const { path, circle, rect } = import_vanjs_core146.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
    }),
    rect({
      x: "2",
      y: "9",
      width: "4",
      height: "12"
    }),
    circle({
      cx: "4",
      cy: "4",
      r: "2"
    })
  );
}, "Linkedin");

// src/icons/List.ts
var import_vanjs_core147 = __toESM(require("vanjs-core"), 1);
var List = /* @__PURE__ */ __name((props) => {
  const { line } = import_vanjs_core147.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "8",
      y1: "6",
      x2: "21",
      y2: "6"
    }),
    line({
      x1: "8",
      y1: "12",
      x2: "21",
      y2: "12"
    }),
    line({
      x1: "8",
      y1: "18",
      x2: "21",
      y2: "18"
    }),
    line({
      x1: "3",
      y1: "6",
      x2: "3.01",
      y2: "6"
    }),
    line({
      x1: "3",
      y1: "12",
      x2: "3.01",
      y2: "12"
    }),
    line({
      x1: "3",
      y1: "18",
      x2: "3.01",
      y2: "18"
    })
  );
}, "List");

// src/icons/Loader.ts
var import_vanjs_core148 = __toESM(require("vanjs-core"), 1);
var Loader = /* @__PURE__ */ __name((props) => {
  const { line } = import_vanjs_core148.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "12",
      y1: "2",
      x2: "12",
      y2: "6"
    }),
    line({
      x1: "12",
      y1: "18",
      x2: "12",
      y2: "22"
    }),
    line({
      x1: "4.93",
      y1: "4.93",
      x2: "7.76",
      y2: "7.76"
    }),
    line({
      x1: "16.24",
      y1: "16.24",
      x2: "19.07",
      y2: "19.07"
    }),
    line({
      x1: "2",
      y1: "12",
      x2: "6",
      y2: "12"
    }),
    line({
      x1: "18",
      y1: "12",
      x2: "22",
      y2: "12"
    }),
    line({
      x1: "4.93",
      y1: "19.07",
      x2: "7.76",
      y2: "16.24"
    }),
    line({
      x1: "16.24",
      y1: "7.76",
      x2: "19.07",
      y2: "4.93"
    })
  );
}, "Loader");

// src/icons/Lock.ts
var import_vanjs_core149 = __toESM(require("vanjs-core"), 1);
var Lock = /* @__PURE__ */ __name((props) => {
  const { path, rect } = import_vanjs_core149.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "3",
      y: "11",
      width: "18",
      height: "11",
      rx: "2",
      ry: "2"
    }),
    path({
      d: "M7 11V7a5 5 0 0 1 10 0v4"
    })
  );
}, "Lock");

// src/icons/LogIn.ts
var import_vanjs_core150 = __toESM(require("vanjs-core"), 1);
var LogIn = /* @__PURE__ */ __name((props) => {
  const { polyline, path, line } = import_vanjs_core150.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"
    }),
    polyline({
      points: "10 17 15 12 10 7"
    }),
    line({
      x1: "15",
      y1: "12",
      x2: "3",
      y2: "12"
    })
  );
}, "LogIn");

// src/icons/LogOut.ts
var import_vanjs_core151 = __toESM(require("vanjs-core"), 1);
var LogOut = /* @__PURE__ */ __name((props) => {
  const { polyline, path, line } = import_vanjs_core151.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
    }),
    polyline({
      points: "16 17 21 12 16 7"
    }),
    line({
      x1: "21",
      y1: "12",
      x2: "9",
      y2: "12"
    })
  );
}, "LogOut");

// src/icons/Mail.ts
var import_vanjs_core152 = __toESM(require("vanjs-core"), 1);
var Mail = /* @__PURE__ */ __name((props) => {
  const { polyline, path } = import_vanjs_core152.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
    }),
    polyline({
      points: "22,6 12,13 2,6"
    })
  );
}, "Mail");

// src/icons/Map.ts
var import_vanjs_core153 = __toESM(require("vanjs-core"), 1);
var Map = /* @__PURE__ */ __name((props) => {
  const { polygon, line } = import_vanjs_core153.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    polygon({
      points: "1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"
    }),
    line({
      x1: "8",
      y1: "2",
      x2: "8",
      y2: "18"
    }),
    line({
      x1: "16",
      y1: "6",
      x2: "16",
      y2: "22"
    })
  );
}, "Map");

// src/icons/MapPin.ts
var import_vanjs_core154 = __toESM(require("vanjs-core"), 1);
var MapPin = /* @__PURE__ */ __name((props) => {
  const { path, circle } = import_vanjs_core154.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
    }),
    circle({
      cx: "12",
      cy: "10",
      r: "3"
    })
  );
}, "MapPin");

// src/icons/Maximize.ts
var import_vanjs_core155 = __toESM(require("vanjs-core"), 1);
var Maximize = /* @__PURE__ */ __name((props) => {
  const { path } = import_vanjs_core155.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"
    })
  );
}, "Maximize");

// src/icons/Maximize2.ts
var import_vanjs_core156 = __toESM(require("vanjs-core"), 1);
var Maximize2 = /* @__PURE__ */ __name((props) => {
  const { polyline, line } = import_vanjs_core156.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "15 3 21 3 21 9"
    }),
    polyline({
      points: "9 21 3 21 3 15"
    }),
    line({
      x1: "21",
      y1: "3",
      x2: "14",
      y2: "10"
    }),
    line({
      x1: "3",
      y1: "21",
      x2: "10",
      y2: "14"
    })
  );
}, "Maximize2");

// src/icons/Meh.ts
var import_vanjs_core157 = __toESM(require("vanjs-core"), 1);
var Meh = /* @__PURE__ */ __name((props) => {
  const { circle, line } = import_vanjs_core157.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10"
    }),
    line({
      x1: "8",
      y1: "15",
      x2: "16",
      y2: "15"
    }),
    line({
      x1: "9",
      y1: "9",
      x2: "9.01",
      y2: "9"
    }),
    line({
      x1: "15",
      y1: "9",
      x2: "15.01",
      y2: "9"
    })
  );
}, "Meh");

// src/icons/Menu.ts
var import_vanjs_core158 = __toESM(require("vanjs-core"), 1);
var Menu = /* @__PURE__ */ __name((props) => {
  const { line } = import_vanjs_core158.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "3",
      y1: "12",
      x2: "21",
      y2: "12"
    }),
    line({
      x1: "3",
      y1: "6",
      x2: "21",
      y2: "6"
    }),
    line({
      x1: "3",
      y1: "18",
      x2: "21",
      y2: "18"
    })
  );
}, "Menu");

// src/icons/MessageCircle.ts
var import_vanjs_core159 = __toESM(require("vanjs-core"), 1);
var MessageCircle = /* @__PURE__ */ __name((props) => {
  const { path } = import_vanjs_core159.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
    })
  );
}, "MessageCircle");

// src/icons/MessageSquare.ts
var import_vanjs_core160 = __toESM(require("vanjs-core"), 1);
var MessageSquare = /* @__PURE__ */ __name((props) => {
  const { path } = import_vanjs_core160.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
    })
  );
}, "MessageSquare");

// src/icons/Mic.ts
var import_vanjs_core161 = __toESM(require("vanjs-core"), 1);
var Mic = /* @__PURE__ */ __name((props) => {
  const { path, line } = import_vanjs_core161.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"
    }),
    path({
      d: "M19 10v2a7 7 0 0 1-14 0v-2"
    }),
    line({
      x1: "12",
      y1: "19",
      x2: "12",
      y2: "23"
    }),
    line({
      x1: "8",
      y1: "23",
      x2: "16",
      y2: "23"
    })
  );
}, "Mic");

// src/icons/MicOff.ts
var import_vanjs_core162 = __toESM(require("vanjs-core"), 1);
var MicOff = /* @__PURE__ */ __name((props) => {
  const { path, line } = import_vanjs_core162.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "1",
      y1: "1",
      x2: "23",
      y2: "23"
    }),
    path({
      d: "M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"
    }),
    path({
      d: "M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"
    }),
    line({
      x1: "12",
      y1: "19",
      x2: "12",
      y2: "23"
    }),
    line({
      x1: "8",
      y1: "23",
      x2: "16",
      y2: "23"
    })
  );
}, "MicOff");

// src/icons/Minimize.ts
var import_vanjs_core163 = __toESM(require("vanjs-core"), 1);
var Minimize = /* @__PURE__ */ __name((props) => {
  const { path } = import_vanjs_core163.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"
    })
  );
}, "Minimize");

// src/icons/Minimize2.ts
var import_vanjs_core164 = __toESM(require("vanjs-core"), 1);
var Minimize2 = /* @__PURE__ */ __name((props) => {
  const { polyline, line } = import_vanjs_core164.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "4 14 10 14 10 20"
    }),
    polyline({
      points: "20 10 14 10 14 4"
    }),
    line({
      x1: "14",
      y1: "10",
      x2: "21",
      y2: "3"
    }),
    line({
      x1: "3",
      y1: "21",
      x2: "10",
      y2: "14"
    })
  );
}, "Minimize2");

// src/icons/Minus.ts
var import_vanjs_core165 = __toESM(require("vanjs-core"), 1);
var Minus = /* @__PURE__ */ __name((props) => {
  const { line } = import_vanjs_core165.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "5",
      y1: "12",
      x2: "19",
      y2: "12"
    })
  );
}, "Minus");

// src/icons/MinusCircle.ts
var import_vanjs_core166 = __toESM(require("vanjs-core"), 1);
var MinusCircle = /* @__PURE__ */ __name((props) => {
  const { circle, line } = import_vanjs_core166.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10"
    }),
    line({
      x1: "8",
      y1: "12",
      x2: "16",
      y2: "12"
    })
  );
}, "MinusCircle");

// src/icons/MinusSquare.ts
var import_vanjs_core167 = __toESM(require("vanjs-core"), 1);
var MinusSquare = /* @__PURE__ */ __name((props) => {
  const { line, rect } = import_vanjs_core167.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "2",
      ry: "2"
    }),
    line({
      x1: "8",
      y1: "12",
      x2: "16",
      y2: "12"
    })
  );
}, "MinusSquare");

// src/icons/Monitor.ts
var import_vanjs_core168 = __toESM(require("vanjs-core"), 1);
var Monitor = /* @__PURE__ */ __name((props) => {
  const { line, rect } = import_vanjs_core168.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "2",
      y: "3",
      width: "20",
      height: "14",
      rx: "2",
      ry: "2"
    }),
    line({
      x1: "8",
      y1: "21",
      x2: "16",
      y2: "21"
    }),
    line({
      x1: "12",
      y1: "17",
      x2: "12",
      y2: "21"
    })
  );
}, "Monitor");

// src/icons/Moon.ts
var import_vanjs_core169 = __toESM(require("vanjs-core"), 1);
var Moon = /* @__PURE__ */ __name((props) => {
  const { path } = import_vanjs_core169.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
    })
  );
}, "Moon");

// src/icons/MoreHorizontal.ts
var import_vanjs_core170 = __toESM(require("vanjs-core"), 1);
var MoreHorizontal = /* @__PURE__ */ __name((props) => {
  const { circle } = import_vanjs_core170.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "1"
    }),
    circle({
      cx: "19",
      cy: "12",
      r: "1"
    }),
    circle({
      cx: "5",
      cy: "12",
      r: "1"
    })
  );
}, "MoreHorizontal");

// src/icons/MoreVertical.ts
var import_vanjs_core171 = __toESM(require("vanjs-core"), 1);
var MoreVertical = /* @__PURE__ */ __name((props) => {
  const { circle } = import_vanjs_core171.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "1"
    }),
    circle({
      cx: "12",
      cy: "5",
      r: "1"
    }),
    circle({
      cx: "12",
      cy: "19",
      r: "1"
    })
  );
}, "MoreVertical");

// src/icons/MousePointer.ts
var import_vanjs_core172 = __toESM(require("vanjs-core"), 1);
var MousePointer = /* @__PURE__ */ __name((props) => {
  const { path } = import_vanjs_core172.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"
    }),
    path({
      d: "M13 13l6 6"
    })
  );
}, "MousePointer");

// src/icons/Move.ts
var import_vanjs_core173 = __toESM(require("vanjs-core"), 1);
var Move = /* @__PURE__ */ __name((props) => {
  const { polyline, line } = import_vanjs_core173.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "5 9 2 12 5 15"
    }),
    polyline({
      points: "9 5 12 2 15 5"
    }),
    polyline({
      points: "15 19 12 22 9 19"
    }),
    polyline({
      points: "19 9 22 12 19 15"
    }),
    line({
      x1: "2",
      y1: "12",
      x2: "22",
      y2: "12"
    }),
    line({
      x1: "12",
      y1: "2",
      x2: "12",
      y2: "22"
    })
  );
}, "Move");

// src/icons/Music.ts
var import_vanjs_core174 = __toESM(require("vanjs-core"), 1);
var Music = /* @__PURE__ */ __name((props) => {
  const { path, circle } = import_vanjs_core174.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M9 18V5l12-2v13"
    }),
    circle({
      cx: "6",
      cy: "18",
      r: "3"
    }),
    circle({
      cx: "18",
      cy: "16",
      r: "3"
    })
  );
}, "Music");

// src/icons/Navigation.ts
var import_vanjs_core175 = __toESM(require("vanjs-core"), 1);
var Navigation = /* @__PURE__ */ __name((props) => {
  const { polygon } = import_vanjs_core175.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    polygon({
      points: "3 11 22 2 13 21 11 13 3 11"
    })
  );
}, "Navigation");

// src/icons/Navigation2.ts
var import_vanjs_core176 = __toESM(require("vanjs-core"), 1);
var Navigation2 = /* @__PURE__ */ __name((props) => {
  const { polygon } = import_vanjs_core176.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    polygon({
      points: "12 2 19 21 12 17 5 21 12 2"
    })
  );
}, "Navigation2");

// src/icons/Octagon.ts
var import_vanjs_core177 = __toESM(require("vanjs-core"), 1);
var Octagon = /* @__PURE__ */ __name((props) => {
  const { polygon } = import_vanjs_core177.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    polygon({
      points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"
    })
  );
}, "Octagon");

// src/icons/Package.ts
var import_vanjs_core178 = __toESM(require("vanjs-core"), 1);
var Package = /* @__PURE__ */ __name((props) => {
  const { polyline, path, line } = import_vanjs_core178.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "16.5",
      y1: "9.4",
      x2: "7.5",
      y2: "4.21"
    }),
    path({
      d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
    }),
    polyline({
      points: "3.27 6.96 12 12.01 20.73 6.96"
    }),
    line({
      x1: "12",
      y1: "22.08",
      x2: "12",
      y2: "12"
    })
  );
}, "Package");

// src/icons/Paperclip.ts
var import_vanjs_core179 = __toESM(require("vanjs-core"), 1);
var Paperclip = /* @__PURE__ */ __name((props) => {
  const { path } = import_vanjs_core179.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"
    })
  );
}, "Paperclip");

// src/icons/Pause.ts
var import_vanjs_core180 = __toESM(require("vanjs-core"), 1);
var Pause = /* @__PURE__ */ __name((props) => {
  const { rect } = import_vanjs_core180.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "6",
      y: "4",
      width: "4",
      height: "16"
    }),
    rect({
      x: "14",
      y: "4",
      width: "4",
      height: "16"
    })
  );
}, "Pause");

// src/icons/PauseCircle.ts
var import_vanjs_core181 = __toESM(require("vanjs-core"), 1);
var PauseCircle = /* @__PURE__ */ __name((props) => {
  const { circle, line } = import_vanjs_core181.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10"
    }),
    line({
      x1: "10",
      y1: "15",
      x2: "10",
      y2: "9"
    }),
    line({
      x1: "14",
      y1: "15",
      x2: "14",
      y2: "9"
    })
  );
}, "PauseCircle");

// src/icons/PenTool.ts
var import_vanjs_core182 = __toESM(require("vanjs-core"), 1);
var PenTool = /* @__PURE__ */ __name((props) => {
  const { path, circle } = import_vanjs_core182.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M12 19l7-7 3 3-7 7-3-3z"
    }),
    path({
      d: "M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"
    }),
    path({
      d: "M2 2l7.586 7.586"
    }),
    circle({
      cx: "11",
      cy: "11",
      r: "2"
    })
  );
}, "PenTool");

// src/icons/Percent.ts
var import_vanjs_core183 = __toESM(require("vanjs-core"), 1);
var Percent = /* @__PURE__ */ __name((props) => {
  const { circle, line } = import_vanjs_core183.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "19",
      y1: "5",
      x2: "5",
      y2: "19"
    }),
    circle({
      cx: "6.5",
      cy: "6.5",
      r: "2.5"
    }),
    circle({
      cx: "17.5",
      cy: "17.5",
      r: "2.5"
    })
  );
}, "Percent");

// src/icons/Phone.ts
var import_vanjs_core184 = __toESM(require("vanjs-core"), 1);
var Phone = /* @__PURE__ */ __name((props) => {
  const { path } = import_vanjs_core184.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
    })
  );
}, "Phone");

// src/icons/PhoneCall.ts
var import_vanjs_core185 = __toESM(require("vanjs-core"), 1);
var PhoneCall = /* @__PURE__ */ __name((props) => {
  const { path } = import_vanjs_core185.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
    })
  );
}, "PhoneCall");

// src/icons/PhoneForwarded.ts
var import_vanjs_core186 = __toESM(require("vanjs-core"), 1);
var PhoneForwarded = /* @__PURE__ */ __name((props) => {
  const { polyline, path, line } = import_vanjs_core186.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "19 1 23 5 19 9"
    }),
    line({
      x1: "15",
      y1: "5",
      x2: "23",
      y2: "5"
    }),
    path({
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
    })
  );
}, "PhoneForwarded");

// src/icons/PhoneIncoming.ts
var import_vanjs_core187 = __toESM(require("vanjs-core"), 1);
var PhoneIncoming = /* @__PURE__ */ __name((props) => {
  const { polyline, path, line } = import_vanjs_core187.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "16 2 16 8 22 8"
    }),
    line({
      x1: "23",
      y1: "1",
      x2: "16",
      y2: "8"
    }),
    path({
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
    })
  );
}, "PhoneIncoming");

// src/icons/PhoneMissed.ts
var import_vanjs_core188 = __toESM(require("vanjs-core"), 1);
var PhoneMissed = /* @__PURE__ */ __name((props) => {
  const { path, line } = import_vanjs_core188.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "23",
      y1: "1",
      x2: "17",
      y2: "7"
    }),
    line({
      x1: "17",
      y1: "1",
      x2: "23",
      y2: "7"
    }),
    path({
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
    })
  );
}, "PhoneMissed");

// src/icons/PhoneOff.ts
var import_vanjs_core189 = __toESM(require("vanjs-core"), 1);
var PhoneOff = /* @__PURE__ */ __name((props) => {
  const { path, line } = import_vanjs_core189.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"
    }),
    line({
      x1: "23",
      y1: "1",
      x2: "1",
      y2: "23"
    })
  );
}, "PhoneOff");

// src/icons/PhoneOutgoing.ts
var import_vanjs_core190 = __toESM(require("vanjs-core"), 1);
var PhoneOutgoing = /* @__PURE__ */ __name((props) => {
  const { polyline, path, line } = import_vanjs_core190.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "23 7 23 1 17 1"
    }),
    line({
      x1: "16",
      y1: "8",
      x2: "23",
      y2: "1"
    }),
    path({
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
    })
  );
}, "PhoneOutgoing");

// src/icons/PieChart.ts
var import_vanjs_core191 = __toESM(require("vanjs-core"), 1);
var PieChart = /* @__PURE__ */ __name((props) => {
  const { path } = import_vanjs_core191.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M21.21 15.89A10 10 0 1 1 8 2.83"
    }),
    path({
      d: "M22 12A10 10 0 0 0 12 2v10z"
    })
  );
}, "PieChart");

// src/icons/Play.ts
var import_vanjs_core192 = __toESM(require("vanjs-core"), 1);
var Play = /* @__PURE__ */ __name((props) => {
  const { polygon } = import_vanjs_core192.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    polygon({
      points: "5 3 19 12 5 21 5 3"
    })
  );
}, "Play");

// src/icons/PlayCircle.ts
var import_vanjs_core193 = __toESM(require("vanjs-core"), 1);
var PlayCircle = /* @__PURE__ */ __name((props) => {
  const { polygon, circle } = import_vanjs_core193.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10"
    }),
    polygon({
      points: "10 8 16 12 10 16 10 8"
    })
  );
}, "PlayCircle");

// src/icons/Plus.ts
var import_vanjs_core194 = __toESM(require("vanjs-core"), 1);
var Plus = /* @__PURE__ */ __name((props) => {
  const { line } = import_vanjs_core194.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "12",
      y1: "5",
      x2: "12",
      y2: "19"
    }),
    line({
      x1: "5",
      y1: "12",
      x2: "19",
      y2: "12"
    })
  );
}, "Plus");

// src/icons/PlusCircle.ts
var import_vanjs_core195 = __toESM(require("vanjs-core"), 1);
var PlusCircle = /* @__PURE__ */ __name((props) => {
  const { circle, line } = import_vanjs_core195.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10"
    }),
    line({
      x1: "12",
      y1: "8",
      x2: "12",
      y2: "16"
    }),
    line({
      x1: "8",
      y1: "12",
      x2: "16",
      y2: "12"
    })
  );
}, "PlusCircle");

// src/icons/PlusSquare.ts
var import_vanjs_core196 = __toESM(require("vanjs-core"), 1);
var PlusSquare = /* @__PURE__ */ __name((props) => {
  const { line, rect } = import_vanjs_core196.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "2",
      ry: "2"
    }),
    line({
      x1: "12",
      y1: "8",
      x2: "12",
      y2: "16"
    }),
    line({
      x1: "8",
      y1: "12",
      x2: "16",
      y2: "12"
    })
  );
}, "PlusSquare");

// src/icons/Pocket.ts
var import_vanjs_core197 = __toESM(require("vanjs-core"), 1);
var Pocket = /* @__PURE__ */ __name((props) => {
  const { polyline, path } = import_vanjs_core197.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"
    }),
    polyline({
      points: "8 10 12 14 16 10"
    })
  );
}, "Pocket");

// src/icons/Power.ts
var import_vanjs_core198 = __toESM(require("vanjs-core"), 1);
var Power = /* @__PURE__ */ __name((props) => {
  const { path, line } = import_vanjs_core198.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M18.36 6.64a9 9 0 1 1-12.73 0"
    }),
    line({
      x1: "12",
      y1: "2",
      x2: "12",
      y2: "12"
    })
  );
}, "Power");

// src/icons/Printer.ts
var import_vanjs_core199 = __toESM(require("vanjs-core"), 1);
var Printer = /* @__PURE__ */ __name((props) => {
  const { polyline, path, rect } = import_vanjs_core199.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "6 9 6 2 18 2 18 9"
    }),
    path({
      d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"
    }),
    rect({
      x: "6",
      y: "14",
      width: "12",
      height: "8"
    })
  );
}, "Printer");

// src/icons/Radio.ts
var import_vanjs_core200 = __toESM(require("vanjs-core"), 1);
var Radio = /* @__PURE__ */ __name((props) => {
  const { path, circle } = import_vanjs_core200.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "2"
    }),
    path({
      d: "M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"
    })
  );
}, "Radio");

// src/icons/RefreshCcw.ts
var import_vanjs_core201 = __toESM(require("vanjs-core"), 1);
var RefreshCcw = /* @__PURE__ */ __name((props) => {
  const { polyline, path } = import_vanjs_core201.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "1 4 1 10 7 10"
    }),
    polyline({
      points: "23 20 23 14 17 14"
    }),
    path({
      d: "M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"
    })
  );
}, "RefreshCcw");

// src/icons/RefreshCw.ts
var import_vanjs_core202 = __toESM(require("vanjs-core"), 1);
var RefreshCw = /* @__PURE__ */ __name((props) => {
  const { polyline, path } = import_vanjs_core202.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "23 4 23 10 17 10"
    }),
    polyline({
      points: "1 20 1 14 7 14"
    }),
    path({
      d: "M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"
    })
  );
}, "RefreshCw");

// src/icons/Repeat.ts
var import_vanjs_core203 = __toESM(require("vanjs-core"), 1);
var Repeat = /* @__PURE__ */ __name((props) => {
  const { polyline, path } = import_vanjs_core203.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "17 1 21 5 17 9"
    }),
    path({
      d: "M3 11V9a4 4 0 0 1 4-4h14"
    }),
    polyline({
      points: "7 23 3 19 7 15"
    }),
    path({
      d: "M21 13v2a4 4 0 0 1-4 4H3"
    })
  );
}, "Repeat");

// src/icons/Rewind.ts
var import_vanjs_core204 = __toESM(require("vanjs-core"), 1);
var Rewind = /* @__PURE__ */ __name((props) => {
  const { polygon } = import_vanjs_core204.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    polygon({
      points: "11 19 2 12 11 5 11 19"
    }),
    polygon({
      points: "22 19 13 12 22 5 22 19"
    })
  );
}, "Rewind");

// src/icons/RotateCcw.ts
var import_vanjs_core205 = __toESM(require("vanjs-core"), 1);
var RotateCcw = /* @__PURE__ */ __name((props) => {
  const { polyline, path } = import_vanjs_core205.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "1 4 1 10 7 10"
    }),
    path({
      d: "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"
    })
  );
}, "RotateCcw");

// src/icons/RotateCw.ts
var import_vanjs_core206 = __toESM(require("vanjs-core"), 1);
var RotateCw = /* @__PURE__ */ __name((props) => {
  const { polyline, path } = import_vanjs_core206.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "23 4 23 10 17 10"
    }),
    path({
      d: "M20.49 15a9 9 0 1 1-2.12-9.36L23 10"
    })
  );
}, "RotateCw");

// src/icons/Rss.ts
var import_vanjs_core207 = __toESM(require("vanjs-core"), 1);
var Rss = /* @__PURE__ */ __name((props) => {
  const { path, circle } = import_vanjs_core207.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M4 11a9 9 0 0 1 9 9"
    }),
    path({
      d: "M4 4a16 16 0 0 1 16 16"
    }),
    circle({
      cx: "5",
      cy: "19",
      r: "1"
    })
  );
}, "Rss");

// src/icons/Save.ts
var import_vanjs_core208 = __toESM(require("vanjs-core"), 1);
var Save = /* @__PURE__ */ __name((props) => {
  const { polyline, path } = import_vanjs_core208.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"
    }),
    polyline({
      points: "17 21 17 13 7 13 7 21"
    }),
    polyline({
      points: "7 3 7 8 15 8"
    })
  );
}, "Save");

// src/icons/Scissors.ts
var import_vanjs_core209 = __toESM(require("vanjs-core"), 1);
var Scissors = /* @__PURE__ */ __name((props) => {
  const { circle, line } = import_vanjs_core209.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "6",
      cy: "6",
      r: "3"
    }),
    circle({
      cx: "6",
      cy: "18",
      r: "3"
    }),
    line({
      x1: "20",
      y1: "4",
      x2: "8.12",
      y2: "15.88"
    }),
    line({
      x1: "14.47",
      y1: "14.48",
      x2: "20",
      y2: "20"
    }),
    line({
      x1: "8.12",
      y1: "8.12",
      x2: "12",
      y2: "12"
    })
  );
}, "Scissors");

// src/icons/Search.ts
var import_vanjs_core210 = __toESM(require("vanjs-core"), 1);
var Search = /* @__PURE__ */ __name((props) => {
  const { circle, line } = import_vanjs_core210.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "11",
      cy: "11",
      r: "8"
    }),
    line({
      x1: "21",
      y1: "21",
      x2: "16.65",
      y2: "16.65"
    })
  );
}, "Search");

// src/icons/Send.ts
var import_vanjs_core211 = __toESM(require("vanjs-core"), 1);
var Send = /* @__PURE__ */ __name((props) => {
  const { polygon, line } = import_vanjs_core211.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "22",
      y1: "2",
      x2: "11",
      y2: "13"
    }),
    polygon({
      points: "22 2 15 22 11 13 2 9 22 2"
    })
  );
}, "Send");

// src/icons/Server.ts
var import_vanjs_core212 = __toESM(require("vanjs-core"), 1);
var Server = /* @__PURE__ */ __name((props) => {
  const { line, rect } = import_vanjs_core212.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "2",
      y: "2",
      width: "20",
      height: "8",
      rx: "2",
      ry: "2"
    }),
    rect({
      x: "2",
      y: "14",
      width: "20",
      height: "8",
      rx: "2",
      ry: "2"
    }),
    line({
      x1: "6",
      y1: "6",
      x2: "6.01",
      y2: "6"
    }),
    line({
      x1: "6",
      y1: "18",
      x2: "6.01",
      y2: "18"
    })
  );
}, "Server");

// src/icons/Settings.ts
var import_vanjs_core213 = __toESM(require("vanjs-core"), 1);
var Settings = /* @__PURE__ */ __name((props) => {
  const { path, circle } = import_vanjs_core213.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "3"
    }),
    path({
      d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
    })
  );
}, "Settings");

// src/icons/Share.ts
var import_vanjs_core214 = __toESM(require("vanjs-core"), 1);
var Share = /* @__PURE__ */ __name((props) => {
  const { polyline, path, line } = import_vanjs_core214.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"
    }),
    polyline({
      points: "16 6 12 2 8 6"
    }),
    line({
      x1: "12",
      y1: "2",
      x2: "12",
      y2: "15"
    })
  );
}, "Share");

// src/icons/Share2.ts
var import_vanjs_core215 = __toESM(require("vanjs-core"), 1);
var Share2 = /* @__PURE__ */ __name((props) => {
  const { circle, line } = import_vanjs_core215.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "18",
      cy: "5",
      r: "3"
    }),
    circle({
      cx: "6",
      cy: "12",
      r: "3"
    }),
    circle({
      cx: "18",
      cy: "19",
      r: "3"
    }),
    line({
      x1: "8.59",
      y1: "13.51",
      x2: "15.42",
      y2: "17.49"
    }),
    line({
      x1: "15.41",
      y1: "6.51",
      x2: "8.59",
      y2: "10.49"
    })
  );
}, "Share2");

// src/icons/Shield.ts
var import_vanjs_core216 = __toESM(require("vanjs-core"), 1);
var Shield = /* @__PURE__ */ __name((props) => {
  const { path } = import_vanjs_core216.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
    })
  );
}, "Shield");

// src/icons/ShieldOff.ts
var import_vanjs_core217 = __toESM(require("vanjs-core"), 1);
var ShieldOff = /* @__PURE__ */ __name((props) => {
  const { path, line } = import_vanjs_core217.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"
    }),
    path({
      d: "M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"
    }),
    line({
      x1: "1",
      y1: "1",
      x2: "23",
      y2: "23"
    })
  );
}, "ShieldOff");

// src/icons/ShoppingBag.ts
var import_vanjs_core218 = __toESM(require("vanjs-core"), 1);
var ShoppingBag = /* @__PURE__ */ __name((props) => {
  const { path, line } = import_vanjs_core218.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"
    }),
    line({
      x1: "3",
      y1: "6",
      x2: "21",
      y2: "6"
    }),
    path({
      d: "M16 10a4 4 0 0 1-8 0"
    })
  );
}, "ShoppingBag");

// src/icons/ShoppingCart.ts
var import_vanjs_core219 = __toESM(require("vanjs-core"), 1);
var ShoppingCart = /* @__PURE__ */ __name((props) => {
  const { path, circle } = import_vanjs_core219.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "9",
      cy: "21",
      r: "1"
    }),
    circle({
      cx: "20",
      cy: "21",
      r: "1"
    }),
    path({
      d: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
    })
  );
}, "ShoppingCart");

// src/icons/Shuffle.ts
var import_vanjs_core220 = __toESM(require("vanjs-core"), 1);
var Shuffle = /* @__PURE__ */ __name((props) => {
  const { polyline, line } = import_vanjs_core220.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "16 3 21 3 21 8"
    }),
    line({
      x1: "4",
      y1: "20",
      x2: "21",
      y2: "3"
    }),
    polyline({
      points: "21 16 21 21 16 21"
    }),
    line({
      x1: "15",
      y1: "15",
      x2: "21",
      y2: "21"
    }),
    line({
      x1: "4",
      y1: "4",
      x2: "9",
      y2: "9"
    })
  );
}, "Shuffle");

// src/icons/Sidebar.ts
var import_vanjs_core221 = __toESM(require("vanjs-core"), 1);
var Sidebar = /* @__PURE__ */ __name((props) => {
  const { line, rect } = import_vanjs_core221.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "2",
      ry: "2"
    }),
    line({
      x1: "9",
      y1: "3",
      x2: "9",
      y2: "21"
    })
  );
}, "Sidebar");

// src/icons/SkipBack.ts
var import_vanjs_core222 = __toESM(require("vanjs-core"), 1);
var SkipBack = /* @__PURE__ */ __name((props) => {
  const { polygon, line } = import_vanjs_core222.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    polygon({
      points: "19 20 9 12 19 4 19 20"
    }),
    line({
      x1: "5",
      y1: "19",
      x2: "5",
      y2: "5"
    })
  );
}, "SkipBack");

// src/icons/SkipForward.ts
var import_vanjs_core223 = __toESM(require("vanjs-core"), 1);
var SkipForward = /* @__PURE__ */ __name((props) => {
  const { polygon, line } = import_vanjs_core223.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    polygon({
      points: "5 4 15 12 5 20 5 4"
    }),
    line({
      x1: "19",
      y1: "5",
      x2: "19",
      y2: "19"
    })
  );
}, "SkipForward");

// src/icons/Slack.ts
var import_vanjs_core224 = __toESM(require("vanjs-core"), 1);
var Slack = /* @__PURE__ */ __name((props) => {
  const { path } = import_vanjs_core224.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"
    }),
    path({
      d: "M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"
    }),
    path({
      d: "M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"
    }),
    path({
      d: "M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"
    }),
    path({
      d: "M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"
    }),
    path({
      d: "M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"
    }),
    path({
      d: "M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"
    }),
    path({
      d: "M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"
    })
  );
}, "Slack");

// src/icons/Slash.ts
var import_vanjs_core225 = __toESM(require("vanjs-core"), 1);
var Slash = /* @__PURE__ */ __name((props) => {
  const { circle, line } = import_vanjs_core225.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10"
    }),
    line({
      x1: "4.93",
      y1: "4.93",
      x2: "19.07",
      y2: "19.07"
    })
  );
}, "Slash");

// src/icons/Sliders.ts
var import_vanjs_core226 = __toESM(require("vanjs-core"), 1);
var Sliders = /* @__PURE__ */ __name((props) => {
  const { line } = import_vanjs_core226.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "4",
      y1: "21",
      x2: "4",
      y2: "14"
    }),
    line({
      x1: "4",
      y1: "10",
      x2: "4",
      y2: "3"
    }),
    line({
      x1: "12",
      y1: "21",
      x2: "12",
      y2: "12"
    }),
    line({
      x1: "12",
      y1: "8",
      x2: "12",
      y2: "3"
    }),
    line({
      x1: "20",
      y1: "21",
      x2: "20",
      y2: "16"
    }),
    line({
      x1: "20",
      y1: "12",
      x2: "20",
      y2: "3"
    }),
    line({
      x1: "1",
      y1: "14",
      x2: "7",
      y2: "14"
    }),
    line({
      x1: "9",
      y1: "8",
      x2: "15",
      y2: "8"
    }),
    line({
      x1: "17",
      y1: "16",
      x2: "23",
      y2: "16"
    })
  );
}, "Sliders");

// src/icons/Smartphone.ts
var import_vanjs_core227 = __toESM(require("vanjs-core"), 1);
var Smartphone = /* @__PURE__ */ __name((props) => {
  const { line, rect } = import_vanjs_core227.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "5",
      y: "2",
      width: "14",
      height: "20",
      rx: "2",
      ry: "2"
    }),
    line({
      x1: "12",
      y1: "18",
      x2: "12.01",
      y2: "18"
    })
  );
}, "Smartphone");

// src/icons/Smile.ts
var import_vanjs_core228 = __toESM(require("vanjs-core"), 1);
var Smile = /* @__PURE__ */ __name((props) => {
  const { path, circle, line } = import_vanjs_core228.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10"
    }),
    path({
      d: "M8 14s1.5 2 4 2 4-2 4-2"
    }),
    line({
      x1: "9",
      y1: "9",
      x2: "9.01",
      y2: "9"
    }),
    line({
      x1: "15",
      y1: "9",
      x2: "15.01",
      y2: "9"
    })
  );
}, "Smile");

// src/icons/Speaker.ts
var import_vanjs_core229 = __toESM(require("vanjs-core"), 1);
var Speaker = /* @__PURE__ */ __name((props) => {
  const { circle, line, rect } = import_vanjs_core229.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "4",
      y: "2",
      width: "16",
      height: "20",
      rx: "2",
      ry: "2"
    }),
    circle({
      cx: "12",
      cy: "14",
      r: "4"
    }),
    line({
      x1: "12",
      y1: "6",
      x2: "12.01",
      y2: "6"
    })
  );
}, "Speaker");

// src/icons/Square.ts
var import_vanjs_core230 = __toESM(require("vanjs-core"), 1);
var Square = /* @__PURE__ */ __name((props) => {
  const { rect } = import_vanjs_core230.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "2",
      ry: "2"
    })
  );
}, "Square");

// src/icons/Star.ts
var import_vanjs_core231 = __toESM(require("vanjs-core"), 1);
var Star = /* @__PURE__ */ __name((props) => {
  const { polygon } = import_vanjs_core231.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    polygon({
      points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
    })
  );
}, "Star");

// src/icons/StopCircle.ts
var import_vanjs_core232 = __toESM(require("vanjs-core"), 1);
var StopCircle = /* @__PURE__ */ __name((props) => {
  const { circle, rect } = import_vanjs_core232.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10"
    }),
    rect({
      x: "9",
      y: "9",
      width: "6",
      height: "6"
    })
  );
}, "StopCircle");

// src/icons/Sun.ts
var import_vanjs_core233 = __toESM(require("vanjs-core"), 1);
var Sun = /* @__PURE__ */ __name((props) => {
  const { circle, line } = import_vanjs_core233.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "5"
    }),
    line({
      x1: "12",
      y1: "1",
      x2: "12",
      y2: "3"
    }),
    line({
      x1: "12",
      y1: "21",
      x2: "12",
      y2: "23"
    }),
    line({
      x1: "4.22",
      y1: "4.22",
      x2: "5.64",
      y2: "5.64"
    }),
    line({
      x1: "18.36",
      y1: "18.36",
      x2: "19.78",
      y2: "19.78"
    }),
    line({
      x1: "1",
      y1: "12",
      x2: "3",
      y2: "12"
    }),
    line({
      x1: "21",
      y1: "12",
      x2: "23",
      y2: "12"
    }),
    line({
      x1: "4.22",
      y1: "19.78",
      x2: "5.64",
      y2: "18.36"
    }),
    line({
      x1: "18.36",
      y1: "5.64",
      x2: "19.78",
      y2: "4.22"
    })
  );
}, "Sun");

// src/icons/Sunrise.ts
var import_vanjs_core234 = __toESM(require("vanjs-core"), 1);
var Sunrise = /* @__PURE__ */ __name((props) => {
  const { polyline, path, line } = import_vanjs_core234.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M17 18a5 5 0 0 0-10 0"
    }),
    line({
      x1: "12",
      y1: "2",
      x2: "12",
      y2: "9"
    }),
    line({
      x1: "4.22",
      y1: "10.22",
      x2: "5.64",
      y2: "11.64"
    }),
    line({
      x1: "1",
      y1: "18",
      x2: "3",
      y2: "18"
    }),
    line({
      x1: "21",
      y1: "18",
      x2: "23",
      y2: "18"
    }),
    line({
      x1: "18.36",
      y1: "11.64",
      x2: "19.78",
      y2: "10.22"
    }),
    line({
      x1: "23",
      y1: "22",
      x2: "1",
      y2: "22"
    }),
    polyline({
      points: "8 6 12 2 16 6"
    })
  );
}, "Sunrise");

// src/icons/Sunset.ts
var import_vanjs_core235 = __toESM(require("vanjs-core"), 1);
var Sunset = /* @__PURE__ */ __name((props) => {
  const { polyline, path, line } = import_vanjs_core235.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M17 18a5 5 0 0 0-10 0"
    }),
    line({
      x1: "12",
      y1: "9",
      x2: "12",
      y2: "2"
    }),
    line({
      x1: "4.22",
      y1: "10.22",
      x2: "5.64",
      y2: "11.64"
    }),
    line({
      x1: "1",
      y1: "18",
      x2: "3",
      y2: "18"
    }),
    line({
      x1: "21",
      y1: "18",
      x2: "23",
      y2: "18"
    }),
    line({
      x1: "18.36",
      y1: "11.64",
      x2: "19.78",
      y2: "10.22"
    }),
    line({
      x1: "23",
      y1: "22",
      x2: "1",
      y2: "22"
    }),
    polyline({
      points: "16 5 12 9 8 5"
    })
  );
}, "Sunset");

// src/icons/Table.ts
var import_vanjs_core236 = __toESM(require("vanjs-core"), 1);
var Table = /* @__PURE__ */ __name((props) => {
  const { path } = import_vanjs_core236.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"
    })
  );
}, "Table");

// src/icons/Tablet.ts
var import_vanjs_core237 = __toESM(require("vanjs-core"), 1);
var Tablet = /* @__PURE__ */ __name((props) => {
  const { line, rect } = import_vanjs_core237.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "4",
      y: "2",
      width: "16",
      height: "20",
      rx: "2",
      ry: "2"
    }),
    line({
      x1: "12",
      y1: "18",
      x2: "12.01",
      y2: "18"
    })
  );
}, "Tablet");

// src/icons/Tag.ts
var import_vanjs_core238 = __toESM(require("vanjs-core"), 1);
var Tag = /* @__PURE__ */ __name((props) => {
  const { path, line } = import_vanjs_core238.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"
    }),
    line({
      x1: "7",
      y1: "7",
      x2: "7.01",
      y2: "7"
    })
  );
}, "Tag");

// src/icons/Target.ts
var import_vanjs_core239 = __toESM(require("vanjs-core"), 1);
var Target = /* @__PURE__ */ __name((props) => {
  const { circle } = import_vanjs_core239.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10"
    }),
    circle({
      cx: "12",
      cy: "12",
      r: "6"
    }),
    circle({
      cx: "12",
      cy: "12",
      r: "2"
    })
  );
}, "Target");

// src/icons/Terminal.ts
var import_vanjs_core240 = __toESM(require("vanjs-core"), 1);
var Terminal = /* @__PURE__ */ __name((props) => {
  const { polyline, line } = import_vanjs_core240.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "4 17 10 11 4 5"
    }),
    line({
      x1: "12",
      y1: "19",
      x2: "20",
      y2: "19"
    })
  );
}, "Terminal");

// src/icons/Thermometer.ts
var import_vanjs_core241 = __toESM(require("vanjs-core"), 1);
var Thermometer = /* @__PURE__ */ __name((props) => {
  const { path } = import_vanjs_core241.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"
    })
  );
}, "Thermometer");

// src/icons/ThumbsDown.ts
var import_vanjs_core242 = __toESM(require("vanjs-core"), 1);
var ThumbsDown = /* @__PURE__ */ __name((props) => {
  const { path } = import_vanjs_core242.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"
    })
  );
}, "ThumbsDown");

// src/icons/ThumbsUp.ts
var import_vanjs_core243 = __toESM(require("vanjs-core"), 1);
var ThumbsUp = /* @__PURE__ */ __name((props) => {
  const { path } = import_vanjs_core243.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
    })
  );
}, "ThumbsUp");

// src/icons/ToggleLeft.ts
var import_vanjs_core244 = __toESM(require("vanjs-core"), 1);
var ToggleLeft = /* @__PURE__ */ __name((props) => {
  const { circle, rect } = import_vanjs_core244.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "1",
      y: "5",
      width: "22",
      height: "14",
      rx: "7",
      ry: "7"
    }),
    circle({
      cx: "8",
      cy: "12",
      r: "3"
    })
  );
}, "ToggleLeft");

// src/icons/ToggleRight.ts
var import_vanjs_core245 = __toESM(require("vanjs-core"), 1);
var ToggleRight = /* @__PURE__ */ __name((props) => {
  const { circle, rect } = import_vanjs_core245.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "1",
      y: "5",
      width: "22",
      height: "14",
      rx: "7",
      ry: "7"
    }),
    circle({
      cx: "16",
      cy: "12",
      r: "3"
    })
  );
}, "ToggleRight");

// src/icons/Tool.ts
var import_vanjs_core246 = __toESM(require("vanjs-core"), 1);
var Tool = /* @__PURE__ */ __name((props) => {
  const { path } = import_vanjs_core246.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
    })
  );
}, "Tool");

// src/icons/Trash.ts
var import_vanjs_core247 = __toESM(require("vanjs-core"), 1);
var Trash = /* @__PURE__ */ __name((props) => {
  const { polyline, path } = import_vanjs_core247.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "3 6 5 6 21 6"
    }),
    path({
      d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
    })
  );
}, "Trash");

// src/icons/Trash2.ts
var import_vanjs_core248 = __toESM(require("vanjs-core"), 1);
var Trash2 = /* @__PURE__ */ __name((props) => {
  const { polyline, path, line } = import_vanjs_core248.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "3 6 5 6 21 6"
    }),
    path({
      d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
    }),
    line({
      x1: "10",
      y1: "11",
      x2: "10",
      y2: "17"
    }),
    line({
      x1: "14",
      y1: "11",
      x2: "14",
      y2: "17"
    })
  );
}, "Trash2");

// src/icons/Trello.ts
var import_vanjs_core249 = __toESM(require("vanjs-core"), 1);
var Trello = /* @__PURE__ */ __name((props) => {
  const { rect } = import_vanjs_core249.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "2",
      ry: "2"
    }),
    rect({
      x: "7",
      y: "7",
      width: "3",
      height: "9"
    }),
    rect({
      x: "14",
      y: "7",
      width: "3",
      height: "5"
    })
  );
}, "Trello");

// src/icons/TrendingDown.ts
var import_vanjs_core250 = __toESM(require("vanjs-core"), 1);
var TrendingDown = /* @__PURE__ */ __name((props) => {
  const { polyline } = import_vanjs_core250.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "23 18 13.5 8.5 8.5 13.5 1 6"
    }),
    polyline({
      points: "17 18 23 18 23 12"
    })
  );
}, "TrendingDown");

// src/icons/TrendingUp.ts
var import_vanjs_core251 = __toESM(require("vanjs-core"), 1);
var TrendingUp = /* @__PURE__ */ __name((props) => {
  const { polyline } = import_vanjs_core251.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "23 6 13.5 15.5 8.5 10.5 1 18"
    }),
    polyline({
      points: "17 6 23 6 23 12"
    })
  );
}, "TrendingUp");

// src/icons/Triangle.ts
var import_vanjs_core252 = __toESM(require("vanjs-core"), 1);
var Triangle = /* @__PURE__ */ __name((props) => {
  const { path } = import_vanjs_core252.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
    })
  );
}, "Triangle");

// src/icons/Truck.ts
var import_vanjs_core253 = __toESM(require("vanjs-core"), 1);
var Truck = /* @__PURE__ */ __name((props) => {
  const { polygon, circle, rect } = import_vanjs_core253.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "1",
      y: "3",
      width: "15",
      height: "13"
    }),
    polygon({
      points: "16 8 20 8 23 11 23 16 16 16 16 8"
    }),
    circle({
      cx: "5.5",
      cy: "18.5",
      r: "2.5"
    }),
    circle({
      cx: "18.5",
      cy: "18.5",
      r: "2.5"
    })
  );
}, "Truck");

// src/icons/Tv.ts
var import_vanjs_core254 = __toESM(require("vanjs-core"), 1);
var Tv = /* @__PURE__ */ __name((props) => {
  const { polyline, rect } = import_vanjs_core254.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "2",
      y: "7",
      width: "20",
      height: "15",
      rx: "2",
      ry: "2"
    }),
    polyline({
      points: "17 2 12 7 7 2"
    })
  );
}, "Tv");

// src/icons/Twitch.ts
var import_vanjs_core255 = __toESM(require("vanjs-core"), 1);
var Twitch = /* @__PURE__ */ __name((props) => {
  const { path } = import_vanjs_core255.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"
    })
  );
}, "Twitch");

// src/icons/Twitter.ts
var import_vanjs_core256 = __toESM(require("vanjs-core"), 1);
var Twitter = /* @__PURE__ */ __name((props) => {
  const { path } = import_vanjs_core256.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
    })
  );
}, "Twitter");

// src/icons/Type.ts
var import_vanjs_core257 = __toESM(require("vanjs-core"), 1);
var Type = /* @__PURE__ */ __name((props) => {
  const { polyline, line } = import_vanjs_core257.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "4 7 4 4 20 4 20 7"
    }),
    line({
      x1: "9",
      y1: "20",
      x2: "15",
      y2: "20"
    }),
    line({
      x1: "12",
      y1: "4",
      x2: "12",
      y2: "20"
    })
  );
}, "Type");

// src/icons/Umbrella.ts
var import_vanjs_core258 = __toESM(require("vanjs-core"), 1);
var Umbrella = /* @__PURE__ */ __name((props) => {
  const { path } = import_vanjs_core258.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"
    })
  );
}, "Umbrella");

// src/icons/Underline.ts
var import_vanjs_core259 = __toESM(require("vanjs-core"), 1);
var Underline = /* @__PURE__ */ __name((props) => {
  const { path, line } = import_vanjs_core259.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"
    }),
    line({
      x1: "4",
      y1: "21",
      x2: "20",
      y2: "21"
    })
  );
}, "Underline");

// src/icons/Unlock.ts
var import_vanjs_core260 = __toESM(require("vanjs-core"), 1);
var Unlock = /* @__PURE__ */ __name((props) => {
  const { path, rect } = import_vanjs_core260.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "3",
      y: "11",
      width: "18",
      height: "11",
      rx: "2",
      ry: "2"
    }),
    path({
      d: "M7 11V7a5 5 0 0 1 9.9-1"
    })
  );
}, "Unlock");

// src/icons/Upload.ts
var import_vanjs_core261 = __toESM(require("vanjs-core"), 1);
var Upload = /* @__PURE__ */ __name((props) => {
  const { polyline, path, line } = import_vanjs_core261.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
    }),
    polyline({
      points: "17 8 12 3 7 8"
    }),
    line({
      x1: "12",
      y1: "3",
      x2: "12",
      y2: "15"
    })
  );
}, "Upload");

// src/icons/UploadCloud.ts
var import_vanjs_core262 = __toESM(require("vanjs-core"), 1);
var UploadCloud = /* @__PURE__ */ __name((props) => {
  const { polyline, path, line } = import_vanjs_core262.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "16 16 12 12 8 16"
    }),
    line({
      x1: "12",
      y1: "12",
      x2: "12",
      y2: "21"
    }),
    path({
      d: "M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"
    }),
    polyline({
      points: "16 16 12 12 8 16"
    })
  );
}, "UploadCloud");

// src/icons/User.ts
var import_vanjs_core263 = __toESM(require("vanjs-core"), 1);
var User = /* @__PURE__ */ __name((props) => {
  const { path, circle } = import_vanjs_core263.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
    }),
    circle({
      cx: "12",
      cy: "7",
      r: "4"
    })
  );
}, "User");

// src/icons/UserCheck.ts
var import_vanjs_core264 = __toESM(require("vanjs-core"), 1);
var UserCheck = /* @__PURE__ */ __name((props) => {
  const { polyline, path, circle } = import_vanjs_core264.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
    }),
    circle({
      cx: "8.5",
      cy: "7",
      r: "4"
    }),
    polyline({
      points: "17 11 19 13 23 9"
    })
  );
}, "UserCheck");

// src/icons/UserMinus.ts
var import_vanjs_core265 = __toESM(require("vanjs-core"), 1);
var UserMinus = /* @__PURE__ */ __name((props) => {
  const { path, circle, line } = import_vanjs_core265.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
    }),
    circle({
      cx: "8.5",
      cy: "7",
      r: "4"
    }),
    line({
      x1: "23",
      y1: "11",
      x2: "17",
      y2: "11"
    })
  );
}, "UserMinus");

// src/icons/UserPlus.ts
var import_vanjs_core266 = __toESM(require("vanjs-core"), 1);
var UserPlus = /* @__PURE__ */ __name((props) => {
  const { path, circle, line } = import_vanjs_core266.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
    }),
    circle({
      cx: "8.5",
      cy: "7",
      r: "4"
    }),
    line({
      x1: "20",
      y1: "8",
      x2: "20",
      y2: "14"
    }),
    line({
      x1: "23",
      y1: "11",
      x2: "17",
      y2: "11"
    })
  );
}, "UserPlus");

// src/icons/UserX.ts
var import_vanjs_core267 = __toESM(require("vanjs-core"), 1);
var UserX = /* @__PURE__ */ __name((props) => {
  const { path, circle, line } = import_vanjs_core267.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
    }),
    circle({
      cx: "8.5",
      cy: "7",
      r: "4"
    }),
    line({
      x1: "18",
      y1: "8",
      x2: "23",
      y2: "13"
    }),
    line({
      x1: "23",
      y1: "8",
      x2: "18",
      y2: "13"
    })
  );
}, "UserX");

// src/icons/Users.ts
var import_vanjs_core268 = __toESM(require("vanjs-core"), 1);
var Users = /* @__PURE__ */ __name((props) => {
  const { path, circle } = import_vanjs_core268.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
    }),
    circle({
      cx: "9",
      cy: "7",
      r: "4"
    }),
    path({
      d: "M23 21v-2a4 4 0 0 0-3-3.87"
    }),
    path({
      d: "M16 3.13a4 4 0 0 1 0 7.75"
    })
  );
}, "Users");

// src/icons/Video.ts
var import_vanjs_core269 = __toESM(require("vanjs-core"), 1);
var Video = /* @__PURE__ */ __name((props) => {
  const { polygon, rect } = import_vanjs_core269.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    polygon({
      points: "23 7 16 12 23 17 23 7"
    }),
    rect({
      x: "1",
      y: "5",
      width: "15",
      height: "14",
      rx: "2",
      ry: "2"
    })
  );
}, "Video");

// src/icons/VideoOff.ts
var import_vanjs_core270 = __toESM(require("vanjs-core"), 1);
var VideoOff = /* @__PURE__ */ __name((props) => {
  const { path, line } = import_vanjs_core270.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"
    }),
    line({
      x1: "1",
      y1: "1",
      x2: "23",
      y2: "23"
    })
  );
}, "VideoOff");

// src/icons/Voicemail.ts
var import_vanjs_core271 = __toESM(require("vanjs-core"), 1);
var Voicemail = /* @__PURE__ */ __name((props) => {
  const { circle, line } = import_vanjs_core271.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "5.5",
      cy: "11.5",
      r: "4.5"
    }),
    circle({
      cx: "18.5",
      cy: "11.5",
      r: "4.5"
    }),
    line({
      x1: "5.5",
      y1: "16",
      x2: "18.5",
      y2: "16"
    })
  );
}, "Voicemail");

// src/icons/Volume.ts
var import_vanjs_core272 = __toESM(require("vanjs-core"), 1);
var Volume = /* @__PURE__ */ __name((props) => {
  const { polygon } = import_vanjs_core272.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    polygon({
      points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
    })
  );
}, "Volume");

// src/icons/Volume1.ts
var import_vanjs_core273 = __toESM(require("vanjs-core"), 1);
var Volume1 = /* @__PURE__ */ __name((props) => {
  const { path, polygon } = import_vanjs_core273.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    polygon({
      points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
    }),
    path({
      d: "M15.54 8.46a5 5 0 0 1 0 7.07"
    })
  );
}, "Volume1");

// src/icons/Volume2.ts
var import_vanjs_core274 = __toESM(require("vanjs-core"), 1);
var Volume2 = /* @__PURE__ */ __name((props) => {
  const { path, polygon } = import_vanjs_core274.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    polygon({
      points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
    }),
    path({
      d: "M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"
    })
  );
}, "Volume2");

// src/icons/VolumeX.ts
var import_vanjs_core275 = __toESM(require("vanjs-core"), 1);
var VolumeX = /* @__PURE__ */ __name((props) => {
  const { polygon, line } = import_vanjs_core275.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    polygon({
      points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
    }),
    line({
      x1: "23",
      y1: "9",
      x2: "17",
      y2: "15"
    }),
    line({
      x1: "17",
      y1: "9",
      x2: "23",
      y2: "15"
    })
  );
}, "VolumeX");

// src/icons/Watch.ts
var import_vanjs_core276 = __toESM(require("vanjs-core"), 1);
var Watch = /* @__PURE__ */ __name((props) => {
  const { polyline, path, circle } = import_vanjs_core276.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "7"
    }),
    polyline({
      points: "12 9 12 12 13.5 13.5"
    }),
    path({
      d: "M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"
    })
  );
}, "Watch");

// src/icons/Wifi.ts
var import_vanjs_core277 = __toESM(require("vanjs-core"), 1);
var Wifi = /* @__PURE__ */ __name((props) => {
  const { path, line } = import_vanjs_core277.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M5 12.55a11 11 0 0 1 14.08 0"
    }),
    path({
      d: "M1.42 9a16 16 0 0 1 21.16 0"
    }),
    path({
      d: "M8.53 16.11a6 6 0 0 1 6.95 0"
    }),
    line({
      x1: "12",
      y1: "20",
      x2: "12.01",
      y2: "20"
    })
  );
}, "Wifi");

// src/icons/WifiOff.ts
var import_vanjs_core278 = __toESM(require("vanjs-core"), 1);
var WifiOff = /* @__PURE__ */ __name((props) => {
  const { path, line } = import_vanjs_core278.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "1",
      y1: "1",
      x2: "23",
      y2: "23"
    }),
    path({
      d: "M16.72 11.06A10.94 10.94 0 0 1 19 12.55"
    }),
    path({
      d: "M5 12.55a10.94 10.94 0 0 1 5.17-2.39"
    }),
    path({
      d: "M10.71 5.05A16 16 0 0 1 22.58 9"
    }),
    path({
      d: "M1.42 9a15.91 15.91 0 0 1 4.7-2.88"
    }),
    path({
      d: "M8.53 16.11a6 6 0 0 1 6.95 0"
    }),
    line({
      x1: "12",
      y1: "20",
      x2: "12.01",
      y2: "20"
    })
  );
}, "WifiOff");

// src/icons/Wind.ts
var import_vanjs_core279 = __toESM(require("vanjs-core"), 1);
var Wind = /* @__PURE__ */ __name((props) => {
  const { path } = import_vanjs_core279.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"
    })
  );
}, "Wind");

// src/icons/X.ts
var import_vanjs_core280 = __toESM(require("vanjs-core"), 1);
var X = /* @__PURE__ */ __name((props) => {
  const { line } = import_vanjs_core280.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    line({
      x1: "18",
      y1: "6",
      x2: "6",
      y2: "18"
    }),
    line({
      x1: "6",
      y1: "6",
      x2: "18",
      y2: "18"
    })
  );
}, "X");

// src/icons/XCircle.ts
var import_vanjs_core281 = __toESM(require("vanjs-core"), 1);
var XCircle = /* @__PURE__ */ __name((props) => {
  const { circle, line } = import_vanjs_core281.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      r: "10"
    }),
    line({
      x1: "15",
      y1: "9",
      x2: "9",
      y2: "15"
    }),
    line({
      x1: "9",
      y1: "9",
      x2: "15",
      y2: "15"
    })
  );
}, "XCircle");

// src/icons/XOctagon.ts
var import_vanjs_core282 = __toESM(require("vanjs-core"), 1);
var XOctagon = /* @__PURE__ */ __name((props) => {
  const { polygon, line } = import_vanjs_core282.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    polygon({
      points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"
    }),
    line({
      x1: "15",
      y1: "9",
      x2: "9",
      y2: "15"
    }),
    line({
      x1: "9",
      y1: "9",
      x2: "15",
      y2: "15"
    })
  );
}, "XOctagon");

// src/icons/XSquare.ts
var import_vanjs_core283 = __toESM(require("vanjs-core"), 1);
var XSquare = /* @__PURE__ */ __name((props) => {
  const { line, rect } = import_vanjs_core283.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    rect({
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "2",
      ry: "2"
    }),
    line({
      x1: "9",
      y1: "9",
      x2: "15",
      y2: "15"
    }),
    line({
      x1: "15",
      y1: "9",
      x2: "9",
      y2: "15"
    })
  );
}, "XSquare");

// src/icons/Youtube.ts
var import_vanjs_core284 = __toESM(require("vanjs-core"), 1);
var Youtube = /* @__PURE__ */ __name((props) => {
  const { path, polygon } = import_vanjs_core284.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    path({
      d: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"
    }),
    polygon({
      points: "9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"
    })
  );
}, "Youtube");

// src/icons/Zap.ts
var import_vanjs_core285 = __toESM(require("vanjs-core"), 1);
var Zap = /* @__PURE__ */ __name((props) => {
  const { polygon } = import_vanjs_core285.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    polygon({
      points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2"
    })
  );
}, "Zap");

// src/icons/ZapOff.ts
var import_vanjs_core286 = __toESM(require("vanjs-core"), 1);
var ZapOff = /* @__PURE__ */ __name((props) => {
  const { polyline, line } = import_vanjs_core286.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    polyline({
      points: "12.41 6.75 13 2 10.57 4.92"
    }),
    polyline({
      points: "18.57 12.91 21 10 15.66 10"
    }),
    polyline({
      points: "8 8 3 14 12 14 11 22 16 16"
    }),
    line({
      x1: "1",
      y1: "1",
      x2: "23",
      y2: "23"
    })
  );
}, "ZapOff");

// src/icons/ZoomIn.ts
var import_vanjs_core287 = __toESM(require("vanjs-core"), 1);
var ZoomIn = /* @__PURE__ */ __name((props) => {
  const { circle, line } = import_vanjs_core287.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "11",
      cy: "11",
      r: "8"
    }),
    line({
      x1: "21",
      y1: "21",
      x2: "16.65",
      y2: "16.65"
    }),
    line({
      x1: "11",
      y1: "8",
      x2: "11",
      y2: "14"
    }),
    line({
      x1: "8",
      y1: "11",
      x2: "14",
      y2: "11"
    })
  );
}, "ZoomIn");

// src/icons/ZoomOut.ts
var import_vanjs_core288 = __toESM(require("vanjs-core"), 1);
var ZoomOut = /* @__PURE__ */ __name((props) => {
  const { circle, line } = import_vanjs_core288.default.tags(svgNamespace);
  return FeatherIcon(
    props,
    circle({
      cx: "11",
      cy: "11",
      r: "8"
    }),
    line({
      x1: "21",
      y1: "21",
      x2: "16.65",
      y2: "16.65"
    }),
    line({
      x1: "8",
      y1: "11",
      x2: "14",
      y2: "11"
    })
  );
}, "ZoomOut");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Activity,
  Airplay,
  AlertCircle,
  AlertOctagon,
  AlertTriangle,
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Anchor,
  Aperture,
  Archive,
  ArrowDown,
  ArrowDownCircle,
  ArrowDownLeft,
  ArrowDownRight,
  ArrowLeft,
  ArrowLeftCircle,
  ArrowRight,
  ArrowRightCircle,
  ArrowUp,
  ArrowUpCircle,
  ArrowUpLeft,
  ArrowUpRight,
  AtSign,
  Award,
  BarChart,
  BarChart2,
  Battery,
  BatteryCharging,
  Bell,
  BellOff,
  Bluetooth,
  Bold,
  Book,
  BookOpen,
  Bookmark,
  Box,
  Briefcase,
  Calendar,
  Camera,
  CameraOff,
  Cast,
  Check,
  CheckCircle,
  CheckSquare,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronsDown,
  ChevronsLeft,
  ChevronsRight,
  ChevronsUp,
  Chrome,
  Circle,
  Clipboard,
  Clock,
  Cloud,
  CloudDrizzle,
  CloudLightning,
  CloudOff,
  CloudRain,
  CloudSnow,
  Code,
  Codepen,
  Codesandbox,
  Coffee,
  Columns,
  Command,
  Compass,
  Copy,
  CornerDownLeft,
  CornerDownRight,
  CornerLeftDown,
  CornerLeftUp,
  CornerRightDown,
  CornerRightUp,
  CornerUpLeft,
  CornerUpRight,
  Cpu,
  CreditCard,
  Crop,
  Crosshair,
  Database,
  Delete,
  Disc,
  Divide,
  DivideCircle,
  DivideSquare,
  DollarSign,
  Download,
  DownloadCloud,
  Dribbble,
  Droplet,
  Edit,
  Edit2,
  Edit3,
  ExternalLink,
  Eye,
  EyeOff,
  Facebook,
  FastForward,
  Feather,
  Figma,
  File,
  FileMinus,
  FilePlus,
  FileText,
  Film,
  Filter,
  Flag,
  Folder,
  FolderMinus,
  FolderPlus,
  Framer,
  Frown,
  Gift,
  GitBranch,
  GitCommit,
  GitMerge,
  GitPullRequest,
  Github,
  Gitlab,
  Globe,
  Grid,
  HardDrive,
  Hash,
  Headphones,
  Heart,
  HelpCircle,
  Hexagon,
  Home,
  Image,
  Inbox,
  Info,
  Instagram,
  Italic,
  Key,
  Layers,
  Layout,
  LifeBuoy,
  Link,
  Link2,
  Linkedin,
  List,
  Loader,
  Lock,
  LogIn,
  LogOut,
  Mail,
  Map,
  MapPin,
  Maximize,
  Maximize2,
  Meh,
  Menu,
  MessageCircle,
  MessageSquare,
  Mic,
  MicOff,
  Minimize,
  Minimize2,
  Minus,
  MinusCircle,
  MinusSquare,
  Monitor,
  Moon,
  MoreHorizontal,
  MoreVertical,
  MousePointer,
  Move,
  Music,
  Navigation,
  Navigation2,
  Octagon,
  Package,
  Paperclip,
  Pause,
  PauseCircle,
  PenTool,
  Percent,
  Phone,
  PhoneCall,
  PhoneForwarded,
  PhoneIncoming,
  PhoneMissed,
  PhoneOff,
  PhoneOutgoing,
  PieChart,
  Play,
  PlayCircle,
  Plus,
  PlusCircle,
  PlusSquare,
  Pocket,
  Power,
  Printer,
  Radio,
  RefreshCcw,
  RefreshCw,
  Repeat,
  Rewind,
  RotateCcw,
  RotateCw,
  Rss,
  Save,
  Scissors,
  Search,
  Send,
  Server,
  Settings,
  Share,
  Share2,
  Shield,
  ShieldOff,
  ShoppingBag,
  ShoppingCart,
  Shuffle,
  Sidebar,
  SkipBack,
  SkipForward,
  Slack,
  Slash,
  Sliders,
  Smartphone,
  Smile,
  Speaker,
  Square,
  Star,
  StopCircle,
  Sun,
  Sunrise,
  Sunset,
  Table,
  Tablet,
  Tag,
  Target,
  Terminal,
  Thermometer,
  ThumbsDown,
  ThumbsUp,
  ToggleLeft,
  ToggleRight,
  Tool,
  Trash,
  Trash2,
  Trello,
  TrendingDown,
  TrendingUp,
  Triangle,
  Truck,
  Tv,
  Twitch,
  Twitter,
  Type,
  Umbrella,
  Underline,
  Unlock,
  Upload,
  UploadCloud,
  User,
  UserCheck,
  UserMinus,
  UserPlus,
  UserX,
  Users,
  Video,
  VideoOff,
  Voicemail,
  Volume,
  Volume1,
  Volume2,
  VolumeX,
  Watch,
  Wifi,
  WifiOff,
  Wind,
  X,
  XCircle,
  XOctagon,
  XSquare,
  Youtube,
  Zap,
  ZapOff,
  ZoomIn,
  ZoomOut
});
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map