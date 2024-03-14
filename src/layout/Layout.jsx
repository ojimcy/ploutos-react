import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../components/Sidebar';
import { Col, Row } from 'reactstrap';

function DashboardLayout({ children }) {
  return (
    <>
      <div className="dashboard-content">
        <Row>
          <Col lg="12">
            <Sidebar />
          </Col>
          <Col lg="12">
            <main className="main-content mt-4">{children}</main>
          </Col>
        </Row>
      </div>
    </>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardLayout;
