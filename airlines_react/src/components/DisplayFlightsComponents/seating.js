import React from 'react';

export default class Seating extends React.Component
{
    render() {
        const rows = [];
        for(let i=0; i<this.props.rows; i++){
            rows.push([]);
            for(let j=0; j<this.props.cols; j++){
                rows[i].push("");
            }
        }
        let seatIds = this.props.selectedSeat.split('-');
        let selectedRowId = seatIds[0];
        let selectedColId = seatIds[1];
        return (
            <div>
                Seating Component <br />
                Rows: {this.props.rows} <br />
                Cols: {this.props.cols}
                <table>
                    <tbody>
                        {rows.map((r, rowIndex) => <tr key={"row-"+rowIndex}>
                            { r.map((c, colIndex) => <td 
                                key={"seat-"+rowIndex+"-"+colIndex}
                                onClick={() => this.props.onSeatSelected(rowIndex+'-'+colIndex)}
                            >
                                { (selectedRowId==rowIndex && selectedColId==colIndex) ? 
                                    <span>[x]</span> 
                                : 
                                    <span>[ ]</span> 
                                }
                            </td>)}
                        </tr>)}
                    </tbody>
                </table>
            </div>
        );
    }
}
