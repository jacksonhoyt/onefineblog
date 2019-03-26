import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

const ModalConfirmDelete = () => (
  <Modal trigger={<Button>Basic Modal</Button>} basic size='small'>
    <Header icon='archive' content='Delete Post' />
    <Modal.Content>
      <p>
        You cannot recover the post after it is deleted. Proceed anyway?
      </p>
    </Modal.Content>
    <Modal.Actions>
      <Button basic color='green' inverted>
        <Icon name='remove' /> No
      </Button>
      <Button color='red' inverted>
        <Icon name='checkmark' /> Yes
      </Button>
    </Modal.Actions>
  </Modal>
)

export default ModalConfirmDelete
