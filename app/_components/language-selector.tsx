import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

interface LanguageSelectorProps {}
1;

export const LanguageSelector = ({}: LanguageSelectorProps) => {
	const [language, setLanguage] = useState("fr");

	return (
		<div>
			Translate to:
			<Select value={language} onValueChange={(lang) => setLanguage(lang)}>
				<SelectTrigger
					className={"w-full mt-2 shadow-[3px_3px_0px_rgba(0,0,0,1)]"}
				>
					<SelectValue
						placeholder="Select a verified email to display"
						defaultValue={"fr"}
					/>
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="en">
						<span role="img" aria-label="English" className="pr-2">
							🇬🇧
						</span>
						English
					</SelectItem>
					<SelectItem value="es">
						<span role="img" aria-label="Spanish" className="pr-2">
							🇪🇸
						</span>
						Spanish
					</SelectItem>
					<SelectItem value="fr">
						<span role="img" aria-label="French" className="pr-2">
							🇫🇷
						</span>
						French
					</SelectItem>
				</SelectContent>
			</Select>
		</div>
	);
};
