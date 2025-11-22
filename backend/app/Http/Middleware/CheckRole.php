public function handle($request, Closure $next, $role)
{
    if (strtolower($request->user()->role) !== strtolower($role)) {
        return response()->json(['message' => 'Unauthorized'], 403);
    }

    return $next($request);
}
