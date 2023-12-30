import {
  AcademicCapIcon,
  LightBulbIcon,
  PuzzlePieceIcon,
  WrenchScrewdriverIcon,
  BuildingOfficeIcon,
  MapIcon,
} from "@heroicons/react/24/solid";

export let TAG_COLOR = {
  "Product Design": {
    color: "text-cyan-700",
    backgroundColor: "bg-cyan-100",
    icon: PuzzlePieceIcon,
  },
  research: {
    color: "text-fuchsia-700",
    backgroundColor: "bg-fuchsia-100",
    icon: AcademicCapIcon,
  },
  Adventure: {
    color: "text-white",
    backgroundColor: "bg-gradient-to-tr from-indigo-500 to-purple-600",
    icon: MapIcon,
  },
  Exploration: {
    color: "text-white",
    backgroundColor: "bg-gradient-to-tr from-blue-500 to-indigo-600",
    icon: MapIcon,
  },
  "Front end Development": {
    color: "text-green-700",
    backgroundColor: "bg-green-100",
    icon: WrenchScrewdriverIcon,
  },
  "Product Owner": {
    color: "text-orange-700",
    backgroundColor: "bg-orange-100",
    icon: BuildingOfficeIcon,
  },
  "Design and Development": {
    color: "text-red-700",
    backgroundColor: "bg-red-100",
    icon: LightBulbIcon,
  },
};
