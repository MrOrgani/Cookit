import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Unit, useUserPreferences } from "@/store/use-user-preferences";

interface UnitSelectorProps {}

export const UnitSelector = ({}: UnitSelectorProps) => {
	const unit = useUserPreferences((state) => state.unit);
	const setUnit = useUserPreferences((state) => state.setUnit);

	return (
		<div>
			Display units:
			<Select
				value={unit}
				onValueChange={(selectedUnit: Unit) => setUnit(selectedUnit)}
			>
				<SelectTrigger
					className={"w-full mt-2 shadow-[3px_3px_0px_rgba(0,0,0,1)]"}
				>
					<SelectValue
						placeholder="Select a verified email to display"
						defaultValue={"metric"}
					/>
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="metric">
						<span role="img" aria-label="Metric" className="pr-2">
							📏
						</span>
						Metric
					</SelectItem>
					<SelectItem value="imperial">
						<span role="img" aria-label="Imperial" className="pr-2">
							🇺🇸
						</span>
						Imperial
					</SelectItem>
				</SelectContent>
			</Select>
		</div>
	);
};
