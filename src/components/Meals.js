import React from 'react';

const Meals = ({ schedules }) => {
  return (
    <div className="col-xs-12  col-sm-12 col-md-12 col-lg-12">
      <ol id="list">
        {schedules.map((sch) => (
          <div key={sch.meal + sch.name + sch.date}>
            <li className={getClass(sch.meal)}>
              {sch.meal.slice(1)} for {sch.name} on {sch.date}
            </li>
          </div>
        ))}
        {/* <div>
          <li className="morning">Breakfast for insert_hacker_name</li>
          <li className="afternoon">Lunch for insert_hacker_name</li>
          <li className="night">Dinner for insert_hacker_name</li>
        </div> */}
      </ol>
    </div>
  );
};
export default Meals;

function getClass(str) {
  switch (str) {
    case 'aBreakfast':
      return 'morning';
    case 'bLunch':
      return 'afternoon';
    case 'cDinner':
      return 'night';
    default:
      return 'morning';
  }
}
