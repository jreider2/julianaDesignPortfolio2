import React from 'react';
import overviewStyles from "./overview.module.css";

export default function Overview ({ myRole, responsibilities, timeline, status, team, overviewText }) {
    return (
        <div className={overviewStyles.outterContainer}>
            {/* row 1 */}
            <div className={overviewStyles.row1}>
                    <div>
                        <h1 className={overviewStyles.heading}>My Role</h1>
                        <p className={`${overviewStyles.body} ${overviewStyles.marginTopNone}`}>
                            {myRole}
                            {responsibilities}
                        </p>
                    </div>
                    <div>
                        <h1 className={overviewStyles.heading}>Timeline & Status</h1>
                        <p className={`${overviewStyles.body} ${overviewStyles.marginTopNone}`}>
                            {timeline}
                            <br/>
                            <span className={overviewStyles.emphasis}>
                                {status}
                            </span>
                        </p>
                    </div>
                    <div>
                        <h1 className={overviewStyles.heading}>Team</h1>
                        <p className={`${overviewStyles.body} ${overviewStyles.marginTopNone}`}>
                            {team}
                        </p>
                    </div>
            </div>
            
            {/* row 2 */}
            <div className={overviewStyles.row2}>
                <h1 className={overviewStyles.heading}>Overview</h1>
                <p className={`${overviewStyles.body} ${overviewStyles.marginTopNone} ${overviewStyles.marginBottomNone}`}>
                    {overviewText}
                </p>
            </div>

        </div>
    );
}