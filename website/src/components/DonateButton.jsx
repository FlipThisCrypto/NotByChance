export default function DonateButton() {
  return (
    <section className="section container text-center donate-section">
      <h2>Support Our Mission</h2>
      <p>Your donation goes directly toward supplies and outreach logistics. Every dollar makes a difference.</p>
      <form action="https://www.paypal.com/donate" method="post" target="_top" style={{ display: 'inline-block', marginTop: 'var(--space-sm)' }}>
        <input type="hidden" name="hosted_button_id" value="VJPY952DDZDHC" />
        <input
          type="image"
          src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
          border="0"
          name="submit"
          title="PayPal - The safer, easier way to pay online!"
          alt="Donate with PayPal button"
        />
        <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
      </form>
      <p className="text-small" style={{ marginTop: 'var(--space-sm)' }}>Not By Chance Outreach is a registered 501(c)(3) nonprofit. Donations are tax-deductible to the extent allowed by law.</p>
    </section>
  )
}
