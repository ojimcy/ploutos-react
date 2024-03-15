import React from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';

import icon from '../assets/images/icon.png';
import HistoryTable from './HistoryTable';

const hist = [
  { date: '2024-03-10', amount: '500 PLT' },
  { date: '2024-03-11', amount: '750 PLT' },
];

function MainDashboard() {
  return (
    <>
      <div className="main-card">
        <Row>
          <Col className="mb-3" md="8" sm="12">
            <div className="amount-card">
              <Row>
                <Col className="mb-3" md="6" sm="12">
                  <div className="balance-card">
                    <Card className="coin-card">
                      <CardBody className="p-4 d-flex flex-column justify-content-center">
                        <div className="chart-num">
                          <div className="label">
                            <span>Presale</span>
                          </div>
                          <div className="amount">
                            <div className="coin-image">
                              <img src={icon} alt="PLT" />{' '}
                            </div>
                            <span>15000</span>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </div>
                </Col>
                <Col className="mb-3" md="6" sm="12">
                  <div className="balance-card">
                    <Card className="coin-card">
                      <CardBody className="p-4 d-flex flex-column justify-content-center">
                        <div className="chart-num">
                          <div className="label">
                            <span>Airdrop</span>
                          </div>
                          <div className="amount">
                            <div className="coin-image">
                              <img src={icon} alt="PLT" />{' '}
                            </div>
                            <span>150</span>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>

          <Col className="mb-3" md="4" sm="12">
            <div className="balance-card">
              <Card className="coin-card">
                <CardBody className="p-4 d-flex flex-column justify-content-center allocation">
                  <div className="title mb-4">
                    <h4>Monthly Allocation</h4>
                  </div>
                  <div className="chart-num">
                    <div className="amount">
                      <div className="coin-image">
                        <img src={icon} alt="PLT" />{' '}
                      </div>
                      <h2 className="amount-per-month">15</h2>
                    </div>
                  </div>
                  <div className="cart-btn mt-4">
                    <button className="claim-btn">Claim</button>
                  </div>
                </CardBody>
              </Card>
            </div>
          </Col>
        </Row>

        <div className="history">
          <HistoryTable history={hist} />
        </div>
      </div>
    </>
  );
}

export default MainDashboard;
