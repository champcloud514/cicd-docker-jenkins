:root {
    --primary: #24292e; --accent: #007bff; --bg: #f4f7f6; --white: #ffffff;
}
body { font-family: 'Inter', sans-serif; margin: 0; background: var(--bg); color: var(--primary); }
nav { background: var(--primary); color: var(--white); padding: 1rem 5%; position: sticky; top: 0; z-index: 10; }
.nav-content { display: flex; justify-content: space-between; align-items: center; }
.logo span { color: var(--accent); }

.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; padding: 2rem 5%; }
.card { background: var(--white); padding: 1.5rem; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); transition: 0.3s; }
.card:hover { transform: translateY(-5px); }
.card button { width: 100%; background: var(--accent); color: white; border: none; padding: 0.8rem; border-radius: 6px; cursor: pointer; font-weight: bold; }

.drawer { position: fixed; right: -400px; top: 0; width: 350px; height: 100%; background: var(--white); box-shadow: -5px 0 15px rgba(0,0,0,0.1); transition: 0.4s; z-index: 20; padding: 20px; display: flex; flex-direction: column; }
.drawer.open { right: 0; }
.drawer-header { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #eee; padding-bottom: 1rem; }
.cart-item { display: flex; justify-content: space-between; margin: 1rem 0; font-size: 0.9rem; }
