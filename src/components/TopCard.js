import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class TopCard extends Component{
  render(){
    return(
        <div className="profile-section">
            <div className="profile-card">
              <div id="profile_picture">
                <img className="profile_image" src={'http://3.bp.blogspot.com/-ZFtK_9IfJc0/UJytTXfzY8I/AAAAAAAACws/kPWTgfwiDBk/s640/Stylist+Guy+Profile+Picture+for+Facebook+(37).jpg'} alt="profile picture"/>
              </div>
              <div id="profile_overview">
                <div className="profile-overview-content">
                  <h1 id="name" className="fn">Marcus Warnsley</h1>
                  <p className="headline title">Web Application Developer at Simon Property Group</p>
                  <dl id="demographics">
                    <dt>Location</dt>
                    <dd className="descriptor adr">
                      <span className="locality">Indianapolis, Indiana</span>
                    </dd>
                    <dt>Industry</dt>
                    <dd className="descriptor">Information Technology and Services</dd>
                  </dl>
                  <table className="extra-info">
                    <tbody>
                      <tr data-section="currentPositionsDetails">
                        <th>Current</th>
                        <td>
                          <ol>
                            <li>
                              <span className="org"><a href="https://www.linkedin.com/company/simon-property-group?trk=ppro_cprof">Simon Property Group</a></span>
                            </li>
                          </ol>
                        </td>
                      </tr>
                      <tr data-section="pastPositionsDetails">
                        <th>Previous</th>
                        <td>
                          <ol>
                            <li>
                              <a href="https://www.linkedin.com/company/nextgear-capital?trk=ppro_cprof">NextGear Capital</a>
                            </li>
                            <li>
                              <a href="https://www.linkedin.com/company/keybank?trk=ppro_cprof">KeyBank</a>
                            </li>
                            <li>
                              <a href="https://www.linkedin.com/company/cellular-sales?trk=ppro_cprof">Cellular Sales</a>
                            </li>
                          </ol>
                        </td>
                      </tr>
                      <tr data-section="educationsDetails">
                        <th>Education</th>
                        <td>
                          <ol>
                            <li>Free Code Camp</li>
                          </ol>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="member-connections"><strong>306</strong> connections</div>
                </div>
              </div>
            </div>
        </div>
    );
  }
}

export default TopCard;
