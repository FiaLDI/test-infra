echo "===== CLUSTER ====="
kubectl cluster-info
echo

echo "===== NODES ====="
kubectl get nodes -o wide
echo

echo "===== NAMESPACES ====="
kubectl get ns
echo

echo "===== ALL RESOURCES ====="
kubectl get all -A
echo

echo "===== SERVICES ====="
kubectl get svc -A -o wide
echo

echo "===== INGRESS ====="
kubectl get ingress -A
echo

echo "===== PVC ====="
kubectl get pvc -A
echo

echo "===== PV ====="
kubectl get pv
echo

echo "===== CONFIGMAPS ====="
kubectl get configmaps -A
echo

echo "===== SECRETS ====="
kubectl get secrets -A
echo

echo "===== EVENTS ====="
kubectl get events -A --sort-by=.metadata.creationTimestamp