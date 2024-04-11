const Badges = () => {
  return (
    <div className="edrea_tm_section" id="badges">
      <div className="section_inner">
        <div className="edrea_tm_contact w-full h-auto clear-both float-left">
          <div className="edrea_tm_main_title">
            <h3>
              Donate :<span className="text-pink-color">VIP Badge</span>
            </h3>
          </div>

          <div className="edrea_tm_button">
            <p>
              If you like our extension and want to buy us a coffee, donators
              will get a special
              <span className="text-pink-color">VIP Badge</span> displayed in
              the matchroom. Please include a link to your
              <span className="text-pink-color">FACEIT</span>profile in your
              donation to obtain your badge.
            </p>
            <div className="buttons">
              <a href="#" className="paypal">
                PayPal
              </a>
              <a
                href="https://streamelements.com/shadi_gm/tip"
                className="Streamelements"
              >
                Tipestream
              </a>
              <a
                href="https://www.faceit.com/en/players/shadi"
                className="contact"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Badges;
