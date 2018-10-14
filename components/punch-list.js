const Row = ({ row }) => (
  <tr>
    <td>{row.time.toLocaleString()}</td>
    <td>
      <img src={row.pic} />
    </td>
    <style jsx>{`
      img {
        width: 60vw;
      }
    `}</style>
  </tr>
);

export default class extends React.Component {
  render() {
    const rows = this.props.rows.map(row => <Row row={row} key={row.time} />);
    return rows.length > 0 ? (
      <table className="table">
        <thead>
          <tr>
            <th>Time</th>
            <th>IMG</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    ) : null;
  }
}
