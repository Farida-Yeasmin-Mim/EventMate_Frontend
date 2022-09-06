import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Sidebar from './Sidebar';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'Title', width: 130 },
    { field: 'caption', headerName: 'Caption',  width: 400 },
    
];

const rows = [
    { id: 1, title: 'Wedding', caption: 'Now we can hang out forever!'},
    { id: 2, title: 'Birthday', caption: 'Hold on to your inner child as you grow older.' },
    { id: 3, title: 'Proposal', caption: 'Its time to propose!' },
    { id: 4, title: 'Event', caption: 'A big Event' },
    { id: 5, title: 'Wedding', caption: 'All of my smiles start with you' },
    { id: 6, title: null, caption: 'Display'},
    { id: 7, title: 'Birthday', caption: 'Birthday Blash' },
];

export default function PostList() {
    return (
        <div>
            <div className="container">
                <Sidebar />
                <div style={{ height: 400, width: '100%' }}>
                    <h1>Post List</h1><br/>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                    />
                </div>


            </div>
        </div>



    );
}
