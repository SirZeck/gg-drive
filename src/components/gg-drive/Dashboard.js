import React from 'react'
import { Container } from 'react-bootstrap'
import { useFolder } from '../hooks/useFolder'
import AddFolderButton from './AddFolderButton'
import Navbar from './Navbar'
import Folder from './Folder'
import { useParams } from 'react-router-dom'

export default function Dashboard() {
    const { folderId } = useParams()
    const { folder, childFolders } = useFolder(folderId)
    
    return (
    <>
        <Navbar />
        <Container fluid>
            <AddFolderButton currentFolder={ folder } />
            {childFolders.length > 0 && (
                <div className="d-flex flex-wrap">
                    {childFolders.map(childFolder => (
                        <div 
                        key={childFolder.id} 
                        style={{ maxWidth: '150px' }}
                        className="p-2"
                        >
                            <Folder folder={childFolder} />
                        </div>    
                    ))}
                </div>
            )}
        </Container>
    </>
    )
}
