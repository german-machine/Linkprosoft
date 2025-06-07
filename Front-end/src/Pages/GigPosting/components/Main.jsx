import { useState } from "react";
import ChooseTitle from "../Routes/ChooseTitle";
import SkillsRequired from "../Routes/SkillsRequired";
import ScopeOfWork from "../Routes/ScopeOfWork";
import Budget from "../Routes/Budget";

function Main() {
    const [isActive, setIsActive] = useState('');
    return (
        <div>

            {
                isActive == ''
                    ? <ChooseTitle setIsActive={setIsActive} isActive={isActive} />
                    : isActive == 'skill-required'
                        ? <SkillsRequired setIsActive={setIsActive} isActive={isActive} />
                        : isActive == 'scope-of-work'
                            ? <ScopeOfWork setIsActive={setIsActive} isActive={isActive} />
                            : isActive == 'budget'
                                ? <Budget setIsActive={setIsActive} isActive={isActive} />
                                : 'No such path found'
            }

        </div>
    )
}

export default Main;