import { useState } from "react";
import { User } from "../../types/auth";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import { X, Plus } from "lucide-react";

interface SavedProfilesProps {
  profiles: User[];
  onSelectProfile: (username: string) => void;
  onRemoveProfile: (username: string) => void;
  onAddAccount: () => void;
}

export default function SavedProfiles({
  profiles,
  onSelectProfile,
  onRemoveProfile,
  onAddAccount,
}: SavedProfilesProps) {
  const [hoveredProfile, setHoveredProfile] = useState<string | null>(null);

  return (
    <div className="w-full">
      <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">
        Logins recentes
      </h2>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
        Clique na sua foto para fazer login.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {profiles.map((profile) => (
          <div
            key={profile.username}
            className="relative group"
            onMouseEnter={() => setHoveredProfile(profile.username)}
            onMouseLeave={() => setHoveredProfile(null)}
          >
            <div
              className="flex flex-col items-center cursor-pointer bg-white dark:bg-gray-800 rounded-lg p-4 transition-all hover:shadow-md"
              onClick={() => onSelectProfile(profile.username)}
            >
              <div className="w-20 h-20 mb-3 rounded-full overflow-hidden border-2 border-blue-100 dark:border-blue-900">
                {profile.profileImage ? (
                  <img 
                    src={profile.profileImage} 
                    alt={profile.displayName || profile.username}
                    className="w-full h-full object-cover" 
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-blue-100 dark:bg-blue-900">
                    <span className="text-xl font-semibold text-blue-600 dark:text-blue-300">
                      {(profile.displayName || profile.username)
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .toUpperCase()
                        .substring(0, 2)}
                    </span>
                  </div>
                )}
              </div>
              <span className="text-sm font-medium text-center">
                {profile.displayName || 
                  (profile.username === "admin.admin" ? 
                    "Administrador" : 
                    profile.username
                      .split(".")
                      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
                      .join(" ")
                  )
                }
              </span>
            </div>
            {hoveredProfile === profile.username && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-1 right-1 h-6 w-6 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                onClick={(e) => {
                  e.stopPropagation();
                  onRemoveProfile(profile.username);
                }}
              >
                <X className="h-3 w-3" />
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
