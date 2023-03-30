import React from "react";
import "./listing.css";

const Listing = () => {
  return (
    <div className="listingSection">
      <div class="admincardBox">
        <div class="listingCard">
          <div>
            <div class="numbers">2504</div>
            <div class="cardsName">Daily Views</div>
          </div>

          <div class="iconBx">
            <ion-icon name="eye-outline"></ion-icon>
          </div>
        </div>

        <div class="listingCard">
          <div>
            <div class="numbers">30</div>
            <div class="cardsName">Sales</div>
          </div>

          <div class="iconBx">
            <ion-icon name="cart-outline"></ion-icon>
          </div>
        </div>

        <div class="listingCard">
          <div>
            <div class="numbers">345</div>
            <div class="cardsName">Comments</div>
          </div>

          <div class="iconBx">
            <ion-icon name="chatbubbles-outline"></ion-icon>
          </div>
        </div>

        <div class="listingCard">
          <div>
            <div class="numbers">45</div>
            <div class="cardsName">Delivered</div>
          </div>

          <div class="iconBx">
            <ion-icon name="chatbubbles-outline"></ion-icon>
          </div>
        </div>

        <div class="listingCard">
          <div>
            <div class="numbers">7842</div>
            <div class="cardsName">Earning</div>
          </div>

          <div class="iconBx">
            <ion-icon name="cash-outline"></ion-icon>
          </div>
        </div>
      </div>

      <div class="details">
        <div class="recentOrders">
          <div class="recentcardHeader">
            <h2 className="recentTitle">Recent Orders</h2>
            <a href="#" class="bttn">
              View All
            </a>
          </div>

          <table>
            <thead>
              <tr>
                <td>Name</td>
                <td>Price</td>
                <td>Payment</td>
                <td>Status</td>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Men's Regular Fit Shirt</td>
                <td>₹ 1200</td>
                <td>Paid</td>
                <td>
                  <span class="status delivered">Delivered</span>
                </td>
              </tr>

              <tr>
                <td>Men's Slim Fit Casual Shirt</td>
                <td>₹ 1100</td>
                <td>Due</td>
                <td>
                  <span class="status pending">Pending</span>
                </td>
              </tr>

              <tr>
                <td>Women's Regular Fit T-Shirt</td>
                <td>₹ 2000</td>
                <td>Paid</td>
                <td>
                  <span class="status return">Return</span>
                </td>
              </tr>

              <tr>
                <td>Women Tunic Shirt</td>
                <td>₹ 6200</td>
                <td>Due</td>
                <td>
                  <span class="status inProgress">In Progress</span>
                </td>
              </tr>

              <tr>
                <td>Men's Oversized Fit T-Shirt</td>
                <td>₹ 50000</td>
                <td>Paid</td>
                <td>
                  <span class="status delivered">Delivered</span>
                </td>
              </tr>

              <tr>
                <td>Men's Regular Fit Casual Shirt</td>
                <td>₹ 1100</td>
                <td>Due</td>
                <td>
                  <span class="status pending">Pending</span>
                </td>
              </tr>

              <tr>
                <td>Women's Loose Shirt</td>
                <td>₹ 1200</td>
                <td>Paid</td>
                <td>
                  <span class="status return">Return</span>
                </td>
              </tr>

              <tr>
                <td>Women's Cottswool Casual Checkered Shir</td>
                <td>₹ 620</td>
                <td>Due</td>
                <td>
                  <span class="status inProgress">In Progress</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Listing;
