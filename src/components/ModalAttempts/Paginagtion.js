import Pagination from 'react-bootstrap/Pagination';

export const PaginationState = ({ attempts }) => {
  let active = 1;
  let items = [];
  for (let number = 1; number <= Math.ceil(attempts.length / 10); number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  return (
    <div>
      <Pagination size="sm">{items}</Pagination>
    </div>
  );
};
