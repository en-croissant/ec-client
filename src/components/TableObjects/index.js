import React from "react";
import "./style.css";

const TableObjects = () => {
  return (
    <>
      <a href="/Book">
        <div id="top_book"></div>
        <div id="top_page"></div>
        <div id="side_book"></div>
        <div id="pages"></div>
      </a>

      <div id="chess_base"></div>
      <div id="chess_base_inner">
        <table>
          <thead>
            <tr>
              <th></th>
              <th scope="col">
                <span >A</span>
              </th>
              <th scope="col">
                <span >B</span>
              </th>
              <th scope="col">
                <span >C</span>
              </th>
              <th scope="col">
                <span >D</span>
              </th>
              <th scope="col">
                <span >E</span>
              </th>
              <th scope="col">
                <span >F</span>
              </th>
              <th scope="col">
                <span >G</span>
              </th>
              <th scope="col">
                <span >H</span>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">8</th>
              <td class="light"></td>
              <td class="dark"></td>
              <td class="light"></td>
              <td class="dark"></td>
              <td class="light"></td>
              <td class="dark"></td>
              <td class="light"></td>
              <td class="dark"></td>
              <th scope="row">
                <span >8</span>
              </th>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td class="dark"></td>
              <td class="light"></td>
              <td class="dark"></td>
              <td class="light"></td>
              <td class="dark"></td>
              <td class="light"></td>
              <td class="dark"></td>
              <td class="light"></td>
              <th scope="row">
                <span >7</span>
              </th>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td class="light"></td>
              <td class="dark"></td>
              <td class="light"></td>
              <td class="dark"></td>
              <td class="light"></td>
              <td class="dark"></td>
              <td class="light"></td>
              <td class="dark"></td>
              <th scope="row">
                <span >6</span>
              </th>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td class="dark"></td>
              <td class="light"></td>
              <td class="dark"></td>
              <td class="light"></td>
              <td class="dark"></td>
              <td class="light"></td>
              <td class="dark"></td>
              <td class="light"></td>
              <th scope="row">
                <span >5</span>
              </th>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td class="light"></td>
              <td class="dark"></td>
              <td class="light"></td>
              <td class="dark"></td>
              <td class="light"></td>
              <td class="dark"></td>
              <td class="light"></td>
              <td class="dark"></td>
              <th scope="row">
                <span >4</span>
              </th>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td class="dark"></td>
              <td class="light"></td>
              <td class="dark"></td>
              <td class="light"></td>
              <td class="dark"></td>
              <td class="light"></td>
              <td class="dark"></td>
              <td class="light"></td>
              <th scope="row">
                <span >3</span>
              </th>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td class="light"></td>
              <td class="dark"></td>
              <td class="light"></td>
              <td class="dark"></td>
              <td class="light"></td>
              <td class="dark"></td>
              <td class="light"></td>
              <td class="dark"></td>
              <th scope="row">
                <span >2</span>
              </th>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td class="dark"></td>
              <td class="light"></td>
              <td class="dark"></td>
              <td class="light"></td>
              <td class="dark"></td>
              <td class="light"></td>
              <td class="dark"></td>
              <td class="light"></td>
              <th scope="row">
                <span >1</span>
              </th>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th scope="col">A</th>
              <th scope="col">B</th>
              <th scope="col">C</th>
              <th scope="col">D</th>
              <th scope="col">E</th>
              <th scope="col">F</th>
              <th scope="col">G</th>
              <th scope="col">H</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
      <div id="chess_left"></div>
      <div id="chess_front"></div>
    </>
  );
};
export default TableObjects;
