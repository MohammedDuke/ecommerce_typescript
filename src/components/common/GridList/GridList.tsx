import { Row, Col } from 'react-bootstrap';

type TGridListProps<T> = {
  records: T[];
  renderItem: (record: T) => JSX.Element;
};

type THasID = { id: number };

const GridList = <T extends THasID>({
  records,
  renderItem,
}: TGridListProps<T>) => {
  const categoriesList =
    records.length > 0
      ? records.map((record) => (
          <Col
            key={record.id}
            xs={6}
            md={3}
            className="d-flex justify-content-center mb-5 mt-2"
          >
            {renderItem(record)}
          </Col>
        ))
      : 'there are no categories';
  return <Row>{categoriesList}</Row>;
};

export default GridList;
