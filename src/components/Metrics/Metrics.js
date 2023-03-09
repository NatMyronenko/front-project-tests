import React from 'react';
import css from './Metrics.module.css';

export const Metrics = () => {
  return (
    <div className={css.Metric_wrapper}>
      <div className={css.Metric_item}>
        <div className={css.Metric_count}>175+</div>
        <div className={css.Metric_tag}>users</div>
      </div>
      <div className={css.Metric_item}>
        <div className={css.Metric_count}>20+</div>
        <div className={css.Metric_tag}>test</div>
      </div>
      <div className={css.Metric_item}>
        <div className={css.Metric_count}>175+</div>
        <div className={css.Metric_tag}>users</div>
      </div>
    </div>
  );
};
