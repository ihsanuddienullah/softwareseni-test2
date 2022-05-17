import React, { FC, Dispatch, SetStateAction, useState } from 'react'
import {
  Title,
  PageContainer,
  BodyText,
  Button,
  ButtonGroup,
  elMb6,
  elMb7,
  elSpan2,
  PersistantNotification,
  StatusIndicator,
  Table,
  useModal,
} from '@reapit/elements'

export const handleOnCloseModal =
  (setIndexExpandedRow: Dispatch<SetStateAction<number | null>>, closeModal: () => void) => () => {
    setIndexExpandedRow(null)
    closeModal()
  }

export const TestPage: FC = () => {
  const [indexExpandedRow, setIndexExpandedRow] = useState<number | null>(null)
  const { Modal, openModal, closeModal } = useModal()

  return (
    <PageContainer>
      <Title>Properties for Sale</Title>
      <PersistantNotification className={elMb7} isExpanded intent="secondary" isInline isFullWidth>
        Softwareseni Technical Test
      </PersistantNotification>
      <br />
      <Table
        numberColumns={9}
        indexExpandedRow={indexExpandedRow}
        setIndexExpandedRow={setIndexExpandedRow}
        rows={[
          {
            cells: [
              {
                label: 'Property',
                value: 'Mt Ash Jacket, Brassey Road',
                className: elSpan2,
                icon: 'homeSystem',
                cellHasDarkText: true,
                narrowTable: {
                  showLabel: true,
                },
              },
              {
                label: 'Customer',
                value: 'Mr Johnny Corrigan',
                icon: 'usernameSystem',
                narrowTable: {
                  showLabel: true,
                },
              },
              {
                label: 'Client A/C',
                value: 'Alternate Lettings Client Acc',
                narrowTable: {
                  showLabel: true,
                },
              },
              {
                label: 'Description',
                value: 'Tenant Payment Request',
                narrowTable: {
                  showLabel: true,
                },
              },
              {
                label: 'Request Date',
                value: '19 Apr 2021',
                narrowTable: {
                  showLabel: true,
                },
              },
              {
                label: 'Amount',
                value: '£50.00',
                cellHasDarkText: true,
                narrowTable: {
                  showLabel: true,
                },
              },
              {
                label: 'Payment Status',
                value: 'Not Requested',
                statusCircleIntent: 'danger',
                narrowTable: {
                  showLabel: true,
                },
              },
            ],
            expandableContent: {
              content: (
                <>
                  <BodyText hasGreyText>
                    You may wish to put either calls to action or forms in here that relate to the selected table row.
                  </BodyText>
                  <ButtonGroup alignment="center">
                    <Button intent="primary" chevronRight type="submit" onClick={openModal}>
                      Open Modal
                    </Button>
                  </ButtonGroup>
                </>
              ),
            },
          },
          {
            cells: [
              {
                label: 'Property',
                value: 'Property Name, Road Name',
                className: elSpan2,
                icon: 'homeSystem',
                cellHasDarkText: true,
                narrowTable: {
                  showLabel: true,
                },
              },
              {
                label: 'Customer',
                value: 'Mrs Davina Corrigan',
                icon: 'usernameSystem',
                narrowTable: {
                  showLabel: true,
                },
              },
              {
                label: 'Client A/C',
                value: 'Alternate Lettings Client Acc',
                narrowTable: {
                  showLabel: true,
                },
              },
              {
                label: 'Description',
                value: 'Another descriptions',
                narrowTable: {
                  showLabel: true,
                },
              },
              {
                label: 'Request Date',
                value: '23rd Apr 2021',
                narrowTable: {
                  showLabel: true,
                },
              },
              {
                label: 'Amount',
                value: '£665.21',
                cellHasDarkText: true,
                narrowTable: {
                  showLabel: true,
                },
              },
              {
                label: 'Payment Status',
                value: 'Pending',
                children: (
                  <>
                    <StatusIndicator intent="critical" /> Pending
                  </>
                ),
                narrowTable: {
                  showLabel: true,
                },
              },
            ],
            expandableContent: {
              content: (
                <>
                  <BodyText hasGreyText>
                    You may wish to put either calls to action or forms in here that relate to the selected table row.
                  </BodyText>
                  <ButtonGroup alignment="center">
                    <Button intent="primary" chevronRight type="submit" onClick={openModal}>
                      Open Modal
                    </Button>
                  </ButtonGroup>
                </>
              ),
            },
          },
        ]}
      />
      <Modal title="Modal Opened">
        <PersistantNotification className={elMb6} isExpanded isInline isFullWidth intent="danger">
          Closing me will collapse the table row
        </PersistantNotification>
        <BodyText hasGreyText>Typically Modals are used to confirm or deny things.</BodyText>
        <ButtonGroup alignment="center">
          <Button intent="secondary" onClick={handleOnCloseModal(setIndexExpandedRow, closeModal)}>
            Close
          </Button>
        </ButtonGroup>
      </Modal>
    </PageContainer>
  )
}

export default TestPage
