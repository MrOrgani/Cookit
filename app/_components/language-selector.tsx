import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Language, useUserPreferences } from "@/store/use-user-preferences";

interface LanguageSelectorProps {}
1;

export const LanguageSelector = ({}: LanguageSelectorProps) => {
	const selectedLanguage = useUserPreferences((state) => state.language);
	const setSelectedLanguage = useUserPreferences((state) => state.setLanguage);

	return (
		<div>
			Translate to:
			<Select
				value={selectedLanguage}
				onValueChange={(lang: Language) => setSelectedLanguage(lang)}
			>
				<SelectTrigger
					className={"w-full mt-2 shadow-[3px_3px_0px_rgba(0,0,0,1)]"}
				>
					<SelectValue
						placeholder="Select a language to translate to"
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
