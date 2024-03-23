import React from 'react';
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Input,
  Progress,
  Row,
} from 'reactstrap';

import bnb from '../assets/images/bnb-36x36.svg';
import plt from '../assets/images/loader-p.svg';

function Presale() {
  // Mock data for demonstration
  const stage = 1;
  const currentPrice = 0.005;
  const nextStagePrice = 0.025;
  const amountRaised = 120000;
  const totalAmount = 1000000;

  // Calculate progress percentage
  const progressPercentage = (amountRaised / totalAmount) * 100;
  return (
    <Container>
      <div className="presale-card">
        <Row>
          <Col>
            <div className="presale-progress">
              <Card>
                <CardBody className="p-4 d-flex flex-column justify-content-center">
                  <span className="raised">
                    ${amountRaised} / ${totalAmount}
                  </span>
                  <div className="stage mb-4">
                    Stage {stage} - Get in before the next stage
                  </div>
                  <Progress
                    color="warning"
                    value={progressPercentage}
                    className="mb-3"
                  />
                  <div className="price-info">
                    <div>
                      Current Price: <span>${currentPrice}</span>
                    </div>
                    <div>
                      Next Stage Price: <span>${nextStagePrice}</span>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="presale-paid mt-5">
              <Card>
                <CardBody>
                  <div className="amount-paid">
                    <span>You pay</span>
                    <div className="amount-input mt-2">
                      <Input type="number" min="0.01" placeholder="0" />
                      <div className="token">
                      <button className="symbol py-1 px-3">
                        <img src={bnb} alt="BNB" />
                        <span className="ml-1">BNB</span>
                      </button>
                      <span className='balance mt-2'>Balance: 0</span>
                      </div>
                    </div>
                    <span className='amount-text'>$10</span>
                  </div>
                </CardBody>
              </Card>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="presale-paid mt-2">
              <Card>
                <CardBody>
                  <div className="amount-paid">
                    <span>You Receive</span>
                    <div className="amount-input mt-2">
                      <span className='amount-receive'>1546</span>
                      <div className="symbol py-1 px-3">
                        <img src={plt} alt="PLT" />
                        <span className="ml-1">PLT</span>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </Col>
        </Row>
        <div className="presale-btn mt-5">
          <Button color="success">Connect Wallet</Button>
        </div>
      </div>
    </Container>
  );
}

export default Presale;
