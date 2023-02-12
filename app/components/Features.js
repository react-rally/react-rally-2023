import React from 'react';

export default ({ featureSet }) => {
  return (
    <table className="Features">
      {renderHead(featureSet)}
      {renderBody(featureSet)}
      {renderFoot(featureSet)}
    </table>
  );
};

const renderHead = (featureSet) => {
  return (
    <thead>
      <tr>
        <th></th>
        {featureSet.levels.map((level) => (
          <th key={level.name}>
            <div>{level.name}</div>
            <small>{formatCurrency(level.price)}</small>
          </th>
        ))}
      </tr>
    </thead>
  );
};

const renderBody = (featureSet) => {
  return (
    <tbody>
      {featureSet.features.map((feature) => {
        return (
          <tr key={feature.id}>
            <td>{feature.name}</td>
            {renderFeatureLevels(feature.id, featureSet.levels)}
          </tr>
        )
      })}
    </tbody>
  );
};

const renderFoot = (featureSet) => {
  return (
    <tfoot>
      <tr>
        <th>Complimentary attendee tickets</th>
        {featureSet.levels.map((level) => {
          return <th key={level.name}>{level.tickets}</th>;
        })}
      </tr>
    </tfoot>
  );
};

const renderFeatureLevels = (featureId, levels) => {
  return levels.map((level) => {
    return (
      <td
        key={`${featureId}-${level.name}`}
        dangerouslySetInnerHTML={{
          __html: level.features.includes(featureId) ? '&#x2713;' : ''
        }}
      />
    );
  });
};

const formatCurrency = (number) => {
  return parseInt(number, 10).toLocaleString(undefined, {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
};
