import React from 'react';
import PropTypes from 'prop-types';

import './Statistics.css';


const Statistics = ({title, stats }) => {
    const color = () => {
    const r = Math.floor(Math.random() * (256));
    const b = Math.floor(Math.random() * (256));
    const g = Math.floor(Math.random() * (256));
    return '#' + r.toString(16) + g.toString(16) + b.toString(16);
    }
    return (
        <section className="statistics">
            {title && (
                <h2 className="title">{title}</h2>
            )}

            <ul className="stat-list">
                {stats.map(({ id, label, percentage }) => (
                    <li className="item" key={id} style={{ backgroundColor: color() }}>
                        <span className="label">{label}</span>
                        <span className="percentage">{percentage}%</span>
                    </li>
                ))}
            </ul>
         </section>
    );
 
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};



export default Statistics;
