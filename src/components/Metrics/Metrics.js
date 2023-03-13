import React from 'react';
import css from './Metrics.module.css';

export const Metrics = () => {
  return (
    <ul className={css.Metric_wrapper}>
      <li className={css.Metric_item}>
        <div className={css.Metric_count}>175+</div>
        <div className={css.Metric_tag}>users</div>
      </li>
      <li className={css.Metric_item}>
        <div className={css.Metric_count}>20+</div>
        <div className={css.Metric_tag}>tests</div>
      </li>
      <li className={css.Metric_item}>
        <div className={css.Metric_count}>175+</div>
        <div className={css.Metric_tag}>users</div>
      </li>
    </ul>
  );
};
