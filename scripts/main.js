Blocks.duo.ammoTypes.put(Items.lead, new LightningBulletType);
UnitTypes.mace.weapons.get(0).bullet = new LightningBulletType;

wave = new WaveEffect();
Object.assign(wave, {
	lifetime: 10,
	strokeTo: 25,
	sizeTo: 270
});

nukeEffect = new MultiEffect(Fx.reactorExplosion, wave);


var nuke = new BulletType();	
Object.assign(nuke, {
	collides: false,
	collidesTiles: false,
	collidesAir: true,
	collidesGround: true,
	hitSound: Sounds.explosion,
	instantDisappear: true,
	killShooter: true,
	despawnHit: true,
	splashDamage: 9999999,
	splashDamageRadius: 280,
	hitEffect: nukeEffect
});
nukeWeapon = new Weapon("self-destruct");

Object.assign(nukeWeapon, {
	shootOnDeath: true,
	mirror: false,
	shootCone: 180,
	x: 0,
	shootY: 0,
	ejectEffect: Fx.none,
	shootSound: Sounds.explosion,
	bullet: nuke
});
nukeWeapon.load();

UnitTypes.atrax.weapons.clear();
UnitTypes.atrax.weapons.add(nukeWeapon);
