self.addEventListener('install',function(e){
	e.waitUntil(
		caches.open('word').then(function(cache)
		{
			return cache.addAll([
				'/',
				'index.php',
                'bootstrap-4.0.0-dist/js/bootstrap.min.js',
				'bootstrap-4.0.0-dist/css/bootstrap.css',
				'bootstrap-4.0.0-dist/css/bootstrap.min.css'
	

				]);
		})
		);
})
self.addEventListener('fetch',function(event){
	console.log(event.request.url);
	event.respondWith(
		caches.match(event.request).then(function(response){
			return response || fetch(event.request);
		})
	);
})
