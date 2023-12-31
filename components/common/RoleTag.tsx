import React from "react";
import Tag from "../common/Tag";
import { TAG_COLOR } from "../../constant";

interface IRoleTag {
  roles: string[];
  className?: string;
}

const RoleTag = ({ roles, className }: IRoleTag) => {
  return (
    <>
      <div className={`flex flex-wrap gap-2 md:gap-4 ${className || ""}`}>
        {roles.map((role) => {
          const {
            color = "text-gray-700",
            backgroundColor = "bg-gray-200",
            icon: IconComponent = null,
          } = TAG_COLOR[role] || {};

          return (
            <Tag
              rounded
              color={color}
              backgroundColor={backgroundColor}
              key={role}
              text={role}
              icon={
                IconComponent ? (
                  <IconComponent className={`h-4 w-4 ${color}`} />
                ) : null
              }
            />
          );
        })}
      </div>

      <div className="text-cyan-700 bg-cyan-100 hidden"></div>
      <div className="text-green-700 bg-green-100 hidden"></div>
      <div className="text-orange-700 bg-orange-100 hidden"></div>
      <div className="text-red-700 bg-red-100 hidden"></div>
      <div className="text-fuchsia-700 bg-fuchsia-100 hidden"></div>
      <div className="bg-indigo-100 text-indigo-700 hidden"></div>
    </>
  );
};

export default RoleTag;
